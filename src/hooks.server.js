import { validateSessionToken } from "$lib/server/auth";

export const handle = async ({ event, resolve }) => {
    const sessionToken = event.cookies.get("auth-session");

    if (sessionToken) {
        const { session, user } = await validateSessionToken(sessionToken);

        if (session && user) {
            event.locals.user = user;
        } else {
            event.locals.user = null;
        }
    } else {
        event.locals.user = null;
    }

    console.log("HOOK USER:", event.locals.user);

    return resolve(event);
};