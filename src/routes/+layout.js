import { IconFilter, IconArrowsSort, IconArrowRight, IconArrowLeft, IconX } from "@tabler/icons-svelte";

export function load({ url }) {
    const path = url.pathname;

    let subNavigation = [];

    if (path === "/de/content") {
        subNavigation = [
            { icon: IconFilter },
            { icon: IconArrowsSort }
        ];
    }

    if (path === "/de/create/new") {
        subNavigation = [
            { icon: IconArrowLeft },
            { icon: IconX },
            { icon: IconArrowRight }
        ]
    }

    return {
        subNavigation
    };
}