import { IconLayoutGrid, IconCircleNumber1, IconCircleNumber2, IconCircleNumber3, IconSend2 } from "@tabler/icons-svelte";

export function load() {

    return {
        subNavigation: [
            { icon: IconLayoutGrid, link: `/de`},
            { icon: IconCircleNumber1, link: `/de/create/new` },
            { icon: IconCircleNumber2, link: `/de` },
            { icon: IconCircleNumber3, link: `/de` },
            { icon: IconSend2, link: `/de`}
        ]
    };
}