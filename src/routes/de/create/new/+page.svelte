<script>
    import Step from "$lib/components/forms/Step.svelte";
    import Part from "$lib/components/forms/Part.svelte";
    import Block from "$lib/components/forms/Block.svelte";
    import { steps } from "$lib/data/forms/steps.js";
    import { parts } from "$lib/data/forms/parts.js";
    
    let lang = "de";
    let currentStep = "create_productType";
    let activeParts = ["create_productType_selection"];
    let selectedOptions = [];

    const step = steps[stepID];
    const part = parts[partID];
</script>

{#each Object.keys(steps) as stepID}
    <Step active={currentStep === stepID}>
        {#each step.parts as partID}
            <Part active={activeParts.includes(partID)}>
                {#each part.blocks as blockID}
                    <Block blockID={blockID} lang={lang} selected={selectedOptions} onSelect={(optionID, type) => {
                        
                    }}
            </Part>

    </Step>