<script>
    import { IconCode, IconCircle, IconCircleCheck, IconMessage, IconBook, IconPhotoSpark, IconLayoutBoardSplit, IconDog, IconChevronDown, IconChevronUp } from "@tabler/icons-svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";
    import { allModules } from "$lib/js/data/dropdown.js";
    import { selections } from "$lib/js/data/selections.js";

    let selected = null;
    let step = "step_details_customCommand";
    let part = { part_details_customCommand_type: "active" };
    let triggerElement;
    let submenuElement;
    let direction = "down";
    let currentLabel = null;
    
    const optionPartAssignment = {
        option_details_customCommand_type_category: "part_details_customCommand_category_information",
        option_details_customCommand_type_flow: "part_details_customCommand_flow_information"
    }
    
    function toggleOption(block, optionName) {
        selections.update((store) => {
            const config = store[block];
            const previousValue = config.value;

            if (config.type === "single") {
                config.value = config.value === optionName ? null : optionName;
            }

            if (config.type === "multi") {
                if (config.value.includes(optionName)) {
                    config.value = config.value.filter(value => value !== optionName);
                }

                if (!config.value.includes(optionName)) {
                    config.value = [...config.value, optionName];
                }
            }

            const previousPart = optionPartAssignment[previousValue];
            const nextPart = optionPartAssignment[optionName];
            const selected = config.type === "single" ? config.value === optionName : config.value.includes(optionName);

            if (previousPart && previousPart !== nextPart) {
                removePart(previousPart);
            }
            
            if (nextPart && selected) {
                addPart(nextPart);
            }

            if (nextPart && !selected) {
                removePart(nextPart);
            }

            return { ...store };
        });
    }

    function optionActive(block, optionName) {
        const config = $selections[block];

        return config.type === "single" ? config.value === optionName : config.value.includes(optionName);
    }

    function addPart(partName) {
        setTimeout(() => {
            part[partName] = "enter";
            part = { ...part}
        }, 250);

        setTimeout(() => {
            part[partName] = "active";
            part = { ...part}
        }, 500);
    }

    function removePart(partName) {
        part[partName] = "exit";
        part = { ...part };

        setTimeout(() => {
            delete part[partName];
            part = { ...part };
        }, 250);
    }

    function toggleDropdown(dropdownName) {
        const dropdownOpen = selected !== dropdownName;
        selected = dropdownOpen ? dropdownName : null;

        if (dropdownOpen) {
            setTimeout(() => {
                updateDropdownDirection()
            }, 0);
        }
    }

    function updateDropdownDirection() {
        if (triggerElement && submenuElement) {
            const triggerRect = triggerElement.getBoundingClientRect();
            const submenuHeight = submenuElement.offsetHeight;
            const spaceBelow = window.innerHeight - triggerRect.bottom;
            const spaceAbove = triggerRect.top;

            direction = spaceBelow < submenuHeight && spaceAbove > submenuHeight ? "up" : "down";
        }
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
    <div class="form-content-section" class:hidden={step !== "step_details_customCommand"}>
        <div class="form-content-section-fill-wrapper" class:hidden={!part["part_details_customCommand_type"]}>
            <div class="form-content-section-fill" class:active={part["part_details_customCommand_type"] === "active"} class:enter={part["part_details_customCommand_type"] === "enter"} class:exit={part["part_details_customCommand_type"] === "exit"}>
                <div class="content-block">
                    <h6 class="heading6">Welche Art von Befehl möchtest du einreichen?</h6>
                </div>
                <div class="content-block">
                    <div class="content-block-buttons">
                        <button class="content-button" class:active={optionActive("block_details_customCommand_type_selection", "option_details_customCommand_type_category")} on:click={() => toggleOption("block_details_customCommand_type_selection", "option_details_customCommand_type_category")}>
                            <IconCode class="content-button-icon" />
                            <span class="content-button-font">Kategorie</span>
                            {#if !optionActive("block_details_customCommand_type_selection", "option_details_customCommand_type_category")}
                                <IconCircle class="content-button-icon" />
                            {/if}
                            {#if optionActive("block_details_customCommand_type_selection", "option_details_customCommand_type_category")}
                                <IconCircleCheck class="content-button-icon" />
                            {/if}
                        </button>
                        <button class="content-button" class:active={optionActive("block_details_customCommand_type_selection", "option_details_customCommand_type_flow")} on:click={() => toggleOption("block_details_customCommand_type_selection", "option_details_customCommand_type_flow")}>
                            <IconCode class="content-button-icon" />
                            <span class="content-button-font">Flow</span>
                            {#if !optionActive("block_details_customCommand_type_selection", "option_details_customCommand_type_flow")}
                                <IconCircle class="content-button-icon" />
                            {/if}
                            {#if optionActive("block_details_customCommand_type_selection", "option_details_customCommand_type_flow")}
                                <IconCircleCheck class="content-button-icon" />
                            {/if}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-content-section-fill-wrapper" class:hidden={!part["part_details_customCommand_category_information"]}>
            <div class="form-content-section-fill" class:active={part["part_details_customCommand_category_information"] === "active"} class:enter={part["part_details_customCommand_category_information"] === "enter"} class:exit={part["part_details_customCommand_category_information"] === "exit"}>
                <div class="content-block">
                    <h6 class="heading6">Erzähle uns mehr über deinen Befehl.</h6>
                </div>
                <div class="content-block">
                    <div class="form-dropdown">
                        <ul class="form-dropdown-menu">
                            <li class="form-dropdown-element">
                                <button class="form-dropdown-button" on:click={() => toggleDropdown("dropdown_customCommand_category_details_module")} bind:this={triggerElement}>
                                    <IconDog class="content-button-icon" />
                                    <span class="content-button-font">{currentLabel ?? "Wähle dein Modul"}</span>
                                    {#if !optionActive("block_details_customCommand_category_information_module", "dropdown_details_customCommand_category_information_module")}
                                        <IconChevronDown class="content-button-icon" />
                                    {/if}
                                    {#if optionActive("block_details_customCommand_category_information_module", "dropdown_details_customCommand_category_information_module")}
                                        <IconChevronUp class="content-button-icon" />
                                    {/if}
                                </button>
                            </li>
                        </ul>
                        <Dropdown items={allModules} open={selected === "dropdown_customCommand_category_details_module"} direction={direction} bind:submenuElement />
                    </div>
                </div>
                <div class="content-block">
                    <div class="form-dropdown">
                        <ul class="form-dropdown-menu">
                            <li class="form-dropdown-element">
                                <button class="form-dropdown-button" on:click={() => toggleDropdown("dropdown_customCommand_category_details_test")} bind:this={triggerElement}>
                                    <IconDog class="content-button-icon" />
                                    <span class="content-button-font">{currentLabel ?? "Wähle irgendeine Option"}</span>
                                    {#if selected !== "dropdown_customCommand_category_details_test"}
                                        <IconChevronDown class="content-button-icon" />
                                    {/if}
                                    {#if selected === "dropdown_customCommand_category_details_test"}
                                        <IconChevronUp class="content-button-icon" />
                                    {/if}
                                </button>
                            </li>
                        </ul>
                        <Dropdown items={allModules} open={selected === "dropdown_customCommand_category_details_test"} direction={direction} bind:submenuElement />
                    </div>
                </div>
            </div>
        </div>
        <div class="form-content-section-fill-wrapper" class:hidden={!part["part_details_customCommand_flow_information"]}>
            <div class="form-content-section-fill" class:active={part["part_details_customCommand_flow_information"] === "active"} class:enter={part["part_details_customCommand_flow_information"] === "enter"} class:exit={part["part_details_customCommand_flow_information"] === "exit"}>
                <div class="content-block">
                    <h6 class="heading6">Erzähle uns mehr über deinen Befehl.</h6>
                </div>
                <div class="content-block">
                    
                </div>
            </div>
        </div>
    </div>
</div>