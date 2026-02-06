export function load({ locals }) {
    return {
        user: locals.user
    };
}

export const trailingSlash = "always";