import { SCNX_API_TOKEN } from "$env/dynamic/private";

export async function POST({ request }) {
    const body = await request.json();

    const response = await fetch("https://scnx.app/api/marketplace-api/shared-content", {
        method: "POST",
        headers: {
            "Authorization": SCNX_API_TOKEN,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: response.status
    });
}

export async function GET() {
    const response = await fetch("https://scnx.app/api/marketplace-api/shared-content", {
        headers: {
            "Authorization": SCNX_API_TOKEN
        }
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: response.status
    });
}