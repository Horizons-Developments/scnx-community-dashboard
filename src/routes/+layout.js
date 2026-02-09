import { IconFilter, IconArrowsSort } from "@tabler/icons-svelte";

export function load({ url }) {
    const path = url.pathname;

    let subNavigation = [];

    if (path === "/de/content/") {
        subNavigation = [
            { icon: IconFilter },
            { icon: IconArrowsSort }
        ];
    }

    return {
        subNavigation
    };
}