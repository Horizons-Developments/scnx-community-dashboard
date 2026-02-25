<script>
    import { IconCode, IconCircle, IconCircleCheck, IconCircleDot, IconArrowRight, IconArrowLeft, IconX, IconMessage, IconBook, IconPhotoSpark, IconLayoutBoardSplit } from "@tabler/icons-svelte";

    let selected = null;
    let step = "step_customCommand_details";
    let part = { part_customCommand_category: "active" };
    let option = null;
    
    const optionPartAssignment = {
        option_customCommand_category: "part_customCommand_category_details",
        option_customCommand_flow: "part_customCommand_flow_details"
    }
    
    function toggleOption(optionName) {
        const previous = selected;
        const next = selected !== optionName;

        selected = next ? optionName : null;

        const previousPart = optionPartAssignment[previous];
        const nextPart = optionPartAssignment[optionName];

        if (previousPart && previousPart !== nextPart) {
            removePart(previousPart);
        }

        if (nextPart && next) {
            addPart(nextPart);
        }

        if (!next && nextPart) {
            removePart(nextPart);
        }
    }

    function addPart(partName) {
        setTimeout(() => {
            part[partName] = "move-down";
        }, 275)

        setTimeout(() => {
            part[partName] = "enter";
        }, 300);

        setTimeout(() => {
            part[partName] = "active";
        }, 800);
    }

    function removePart(partName) {
        part[partName] = "exit";
        part= { ...part };

        setTimeout(() => {
            part[partName] = "move-up";
            part = { ...part };
        }, 250);

        setTimeout(() => {
            delete part[partName];
            part = { ...part };
        }, 500);
    }
</script>

<div class="content">
    <div class="content-block">
        <h1 class="heading1">EINREICHEN</h1>
    </div>
    <div class="content-section" class:hidden={step !== "step_productType"}>
        <div class="content-section-fill" class:hidden={part !== "part_productType_selection"}>
            <div class="content-block">
                <h6 class="heading6">Welche Art von Produkt möchtest du einreichen?</h6>
            </div>
            <div class="content-block">
                <div class="content-block-buttons">
                    <button class="content-button" class:active={selected === "option_productType_customCommand"} on:click={() => toggleOption("option_productType_customCommand")}>
                        <IconCode class="content-button-icon" />
                        <span class="content-button-font">Eigener Befehl</span>
                        {#if selected !== "option_productType_customCommand"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option_productType_customCommand"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option_productType_messageTemplate"} on:click={() => toggleOption("option_productType_messageTemplate")}>
                        <IconMessage class="content-button-icon" />
                        <span class="content-button-font">Nachrichten-Vorlage</span>
                        {#if selected !== "option_productType_messageTemplate"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option_productType_messageTemplate"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option_productType_serverTemplate"} on:click={() => toggleOption("option_productType_serverTemplate")}>
                        <IconLayoutBoardSplit class="content-button-icon" />
                        <span class="content-button-font">Server-Vorlage</span>
                        {#if selected !== "option_productType_serverTemplate"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option_productType_serverTemplate"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option_productType_dynamicImage"} on:click={() => toggleOption("option_productType_dynamicImage")}>
                        <IconPhotoSpark class="content-button-icon" />
                        <span class="content-button-font">Dynamisches Bild</span>
                        {#if selected !== "option_productType_dynamicImage"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option_productType_dynamicImage"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option_productType_guideSuggestion"} on:click={() => toggleOption("option_productType_guideSuggestion")}>
                        <IconBook class="content-button-icon" />
                        <span class="content-button-font">Guide-Vorschlag</span>
                        {#if selected !== "option_productType_guideSuggestion"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option_productType_guideSuggestion"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="content-section" class:hidden={step !== "step_customCommand_details"}>
        <div class="form-content-section-fill" class:active={part["part_customCommand_category"] === "active"} class:move-up={part["part_customCommand_category"] === "move-up"} class:move-down={part["part_customCommand_category"] === "move-down"} class:enter={part["part_customCommand_category"] === "enter"} class:exit={part["part_customCommand_category"] === "exit"}>
            <div class="content-block">
                <h6 class="heading6">Welche Art von Befehl möchtest du einreichen?</h6>
            </div>
            <div class="content-block">
                <div class="content-block-buttons">
                    <button class="content-button" class:active={selected === "option_customCommand_category"} on:click={() => toggleOption("option_customCommand_category")}>
                        <IconCode class="content-button-icon" />
                        <span class="content-button-font">Kategorie</span>
                        {#if selected !== "option_customCommand_category"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option_customCommand_category"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option_customCommand_flow"} on:click={() => toggleOption("option_customCommand_flow")}>
                        <IconCode class="content-button-icon" />
                        <span class="content-button-font">Flow</span>
                        {#if selected !== "option_customCommand_flow"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option_customCommand_flow"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                </div>
            </div>
        </div>
        <div class="form-content-section-fill" class:active={part["part_customCommand_category_details"] === "active"} class:move-up={part["part_customCommand_category_details"] === "move-up"} class:move-down={part["part_customCommand_category_details"] === "move-down"} class:enter={part["part_customCommand_category_details"] === "enter"} class:exit={part["part_customCommand_category_details"] === "exit"}>
            <div class="content-block">
                <h6 class="heading6">Erzähle uns mehr über deinen Befehl.</h6>
            </div>
            <div class="content-block">
                
            </div>
        </div>
        <div class="form-content-section-fill" class:active={part["part_customCommand_flow_details"] === "active"} class:move-up={part["part_customCommand_flow_details"] === "move-up"} class:move-down={part["part_customCommand_flow_details"] === "move-down"} class:enter={part["part_customCommand_flow_details"] === "enter"} class:exit={part["part_customCommand_flow_details"] === "exit"}>
            <div class="content-block">
                <h6 class="heading6">Erzähle uns mehr über deinen Befehl.</h6>
            </div>
            <div class="content-block">
                
            </div>
        </div>
    </div>
</div>