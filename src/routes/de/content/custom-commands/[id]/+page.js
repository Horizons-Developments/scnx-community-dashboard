import { redirect } from "@sveltejs/kit";

export function load({ params }) {
    const id = params.id;
    
    throw redirect(307, `/de/content/custom-commands/${id}/overview`);
}