import { SCNX_API_TOKEN } from "$env/dynamic/private";

export async function GET({ params }) {
    const { id } = params;

    const response = await fetch(`https://scnx.app/api/marketplac-eapi/shared-content/${id}`, {
        headers: {
            "Authorization": SCNX_API_TOKEN
        }
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: response.status
    });
}

export async function PATCH({ params, request }) {
    const { id } = params;
    const body = await request.json();

    const response = await fetch(`https://scnx.app/api/marketplace-api/shared-content/${id}`, {
        headers: {
            "Authorization": SCNX_API_TOKEN,
            "Content-Type": "applications/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: response.status
    });
}

export async function DELETE({ params }) {
    const { id } = params;

    const response = await fetch(`https://scnx.app/api/marketplace-api/shared-content/${id}`, {
        headers: {
            "Authorization": SCNX_API_TOKEN
        }
    });

    return new Response(null, {
        status: response.status
    })
}