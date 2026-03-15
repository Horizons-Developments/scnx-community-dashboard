<script>
    import { IconCircle } from "@tabler/icons-svelte";

    export let items = [];
    export let open = false;
    export let direction = "down";
    export let submenuElement;
</script>

<ul class="form-dropdown-submenu" class:open={open} class:up={direction === "up"} bind:this={submenuElement}>
    {#each items as item}
        <li class="form-dropdown-element">
            <button class="form-dropdown-button">
                <item.icon class="content-button-icon" />
                <span class="content-button-font">{item.label}</span>
                <IconCircle class="content-button-icon" />
            </button>
        </li>
    {/each}
</ul>