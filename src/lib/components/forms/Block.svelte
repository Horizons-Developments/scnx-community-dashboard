<script>
    import { blocks } from "$lib/data/forms/blocks.js";
    import { labels } from "$lib/data/forms/labels.js";
    import List from "$lib/components/forms/List.svelte";
    import Dropdown from "$lib/components/forms/Dropdown.svelte";
    import Textfield from "$lib/components/forms/Textfield.svelte";

    export let lang;
    export let active;
    export let blockID;
    export let optionID;

    const block = blocks[blockID];
    const blockLabel = labels[lang].blocks[blockID];
</script>

{#if active}
    <div class="form-block">
        <h6 class="heading6">{blockLabel}</h6>
        {#if block.list}
            {#each block.options as optionID}
                <List {optionID} {lang} />
            {/each}
        {/if}
        {#if block.dropdown}
            <Dropdown {optionID} {lang} />
        {/if}
        {#if block.textfield}
            {#each block.options as optionID}
                <Textfield {optionID} {lang} />
            {/each}
        {/if}
    </div>
{/if}