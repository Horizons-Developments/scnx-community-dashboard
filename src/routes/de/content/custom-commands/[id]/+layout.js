import { IconLayoutGrid, IconDownload, IconInfoCircle, IconUser } from "@tabler/icons-svelte";

export function load({ params }) {
    const id = params.id;

    return {
        subNavigation: [
            { icon: IconLayoutGrid, link: `/de/content/custom-commands/${id}/overview` },
            { icon: IconDownload, link: `/de/content/custom-commands/${id}/import` },
            { icon: IconInfoCircle, link: `/de/content/custom-commands/${id}/info` },
            { icon: IconUser, link: `/de/content/custom-commands/${id}/author`}
        ]
    };
}
