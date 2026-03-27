<script>
    import { steps } from "$lib/data/forms/steps.js";
    import Part from "$lib/components/forms/Part.svelte";
    import { fade } from "svelte/transition";

    export let active = false;
    export let lang;
    export let stepID;

    const step = steps[stepID];
</script>

{#if active}
    <div class="form-step" transition:fade>
        {#each step.parts as partID}
            <Part {partID} {lang} />
        {/each}
    </div>
{/if}