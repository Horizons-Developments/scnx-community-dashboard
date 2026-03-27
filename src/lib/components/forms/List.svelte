<script>
    import { blocks } from "$lib/data/forms/blocks.js";
    import { options } from "$lib/data/forms/options.js";
    import { labels } from "$lib/data/forms/labels.js";
    import { IconCircle, IconCircleCheck, IconSquare, IconSquareCheck } from "@tabler/icons-svelte";
    
    export let lang;
    export let blockID;
    export let optionID;
    export let answers;

    const block = blocks[blockID];
    const option = options[optionID];
    const optionLabel = labels[lang].options[optionID];

    function onSelect() {
        const blockAnswers = answers[blockID] || [];

        if (block.type === "single") {
            answers[blockID] = optionID;
        }
        if (block.type === "multi") {
            if (blockAnswers.includes(optionID)) {
                answers[blockID] = blockAnswers.filter(option => option !== optionID);
            } 
            if (!blockAnswers.includes(optionID)) {
                answers[blockID] = [...blockAnswers, optionID];
            }
        }
    }

    $: selected = block.type === "single"
        ? answers[blockID] === optionID
        : (answers[blockID] || []).includes(optionID)
</script>

<button class="form-list-button" class:active={selected} on:click={onSelect}>
    {#if option.icon}
        <svelte:component class="form-list-button-icon" this={option.icon} />
    {/if}
    {#if optionLabel}
        <span class="form-list-button-label">{optionLabel}</span>
    {/if}
    {#if block.type === "single"}
        {#if !selected}
            <IconCircle class="form-list-button-icon" />
        {/if}
        {#if selected}
            <IconCircleCheck class="form-list-button-icon" />
        {/if}
    {/if}
    {#if block.type === "multi"}
        {#if !selected}
            <IconSquare class="form-list-button-icon" />
        {/if}
        {#if selected}
            <IconSquareCheck class="form-list-button-icon" />
        {/if}
    {/if}
</button>