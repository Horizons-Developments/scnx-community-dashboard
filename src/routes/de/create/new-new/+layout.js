import { IconCircleNumber1, IconCircleNumber2, IconCircleNumber3 } from "@tabler/icons-svelte";

export function load() {

    return {
        subNavigation: [
            { icon: IconCircleNumber1, link: `/de/create/new-new` },
            { icon: IconCircleNumber2, link: `/de` },
            { icon: IconCircleNumber3, link: `/de` }
        ]
    };
}