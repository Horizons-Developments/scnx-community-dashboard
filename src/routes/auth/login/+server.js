import { env } from "$env/dynamic/private";

export function GET() {
    const parameters = new URLSearchParams({
        client_id: env.DISCORD_CLIENT_ID,
        redirect_uri: env.DISCORD_REDIRECT_URI,
        response_type: "code",
        scope: "identify guilds"
    });

    const discordURL = `https://discord.com/oauth2/authorize?${parameters.toString()}`;

    return Response.redirect(discordURL, 302);
}