<script>
    import { parts } from "$lib/data/forms/parts.js";
    import Block from "$lib/components/forms/Block.svelte";
    import { slide } from "svelte/transition";

    export let active = false;
    export let lang;
    export let partID;

    const part = parts[partID];
</script>

{#if active}
    <div class="form-part" transition:slide>
        {#each part.blocks as blockID}
            <Block {blockID} {lang} />
        {/each}
    </div>
{/if}