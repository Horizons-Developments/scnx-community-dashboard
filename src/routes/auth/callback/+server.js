import { env } from "$env/dynamic/private";
import { db } from "$lib/server/db";
import { discordUsers, user } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";

import {
    generateSessionToken,
    createSession,
    setSessionTokenCookie
} from "$lib/server/auth";

export async function GET(event) {
    const url = event.url;
    const code = url.searchParams.get("code");

    if (!code) {
        return new Response("No code provided", { status: 400 });
    }

    const body = new URLSearchParams({
        client_id: env.DISCORD_CLIENT_ID,
        client_secret: env.DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: env.DISCORD_REDIRECT_URI
    });

    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
        console.error("Discord token error:", tokenData);
        return new Response("Failed to get access token", { status: 500 });
    }

    const userResponse = await fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `${tokenData.token_type} ${tokenData.access_token}`
        }
    });

    const discordUser = await userResponse.json();

    let avatarUrl;

    if (discordUser.avatar) {
        avatarUrl = `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`;
    } else {
        const fallback = Number(discordUser.discriminator) % 5;
        avatarUrl = `https://cdn.discordapp.com/embed/avatars/${fallback}.png`;
    }

    if (!discordUser.id) {
        console.error("Discord user error:", discordUser);
        return new Response("Failed to fetch user", { status: 500 });
    }

    let discordDbUser = await db.query.discordUsers.findFirst({
        where: eq(discordUsers.id, discordUser.id)
    });

    if (!discordDbUser) {
        await db.insert(user).values({
            id: discordUser.id,
            username: discordUser.username,
            avatarUrl: avatarUrl
        });
    }

    let authUser = await db.query.user.findFirst({
        where: eq(user.id, discordUser.id)
    });

    if (!authUser) {
        await db.insert(user).values({
            id: discordUser.id,
            username: discordUser.username,
            avatarUrl: avatarUrl
        });
    } else {
        await db.update(user)
            .set({
                username: discordUser.username,
                avatarUrl: avatarUrl
            })
            .where(eq(user.id, discordUser.id));
        }

    const token = generateSessionToken();
    const session = await createSession(token, discordUser.id);

    setSessionTokenCookie(event, token, session.expiresAt);

    const redirectURL = new URL("/", event.url);
    const response = new Response(null, {
        status: 302,
        headers: {
            Location: redirectURL.toString()
        }
    });

    return response;
}