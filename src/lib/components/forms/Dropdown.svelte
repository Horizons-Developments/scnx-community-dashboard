<script>
    import { blocks } from "$lib/data/forms/blocks.js";
    import { options } from "$lib/data/forms/options.js";
    import { labels } from "$lib/data/forms/labels.js";
    import { IconCircle, IconCircleCheck, IconSquare, IconSquareCheck, IconChevronDown } from "@tabler/icons-svelte";

    export let lang;
    export let blockID;
    export let optionID;
    export let answers;

    const block = blocks[blockID];
    const option = options[optionID];
    const optionLabel = labels[lang].options[optionID];
</script>

<button class="form-dropdown-button" on:click={toggleDropdown}>
    {#if option.icon}
        <svelte:component class="form-dropdown-button-icon" this={option.icon} />
    {/if}
    {#if optionLabel}
        <span class="form-dropdown-button-label">{optionLabel}</span>
    {/if}
    <IconChevronDown class="form-dropdown-button-icon" />
</button>

{#if open}
    <ul class="form-dropdown-menu">
        {#each block.options as optionID}
    </ul>