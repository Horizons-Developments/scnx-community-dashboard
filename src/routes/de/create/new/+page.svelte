<script>
    import { IconCode, IconCircle, IconCircleCheck, IconCircleDot, IconArrowRight, IconArrowLeft, IconX, IconMessage, IconBook, IconPhotoSpark } from "@tabler/icons-svelte";

    let selected = null;
    let step = "2.1";
    let part = null;
    let animatePart = null;

    function executeToggle(key, partValue = null) {
        const isOpening = selected !== key;

        selected = isOpening ? key : null;

        if (partValue === null) return;

        if (isOpening) {
            part = partValue;
            animatePart = false;
            
            setTimeout(() => {
                animatePart = true;
            }, 10);
        }

        if (!isOpening) {
            animatePart = false;

            setTimeout(() => {
                part = null;
            }, 1000);
        }
    }
</script>

<div class="content">
    <div class="content-section">
        <div class="content-block">
            <h1 class="heading1">EINREICHEN</h1>
        </div>
        <div class="content-section-fill" class:hidden={step !== "0"}>
            <div class="content-block">
                <div class="content-block-sub-buttons">
                    <button class="content-sub-button" on:click={() => step = "1"}>
                        <div class="content-sub-button-table">
                            <div class="content-sub-button-table-element">
                                <IconArrowLeft class="content-sub-button-icon" />
                            </div>
                            <div class="content-sub-button-table-element">
                                <span class="content-sub-button-font">Zurück</span>
                            </div>
                        </div>
                    </button>
                    <button class="content-sub-button" on:click={() => step = "1"}>
                        <div class="content-sub-button-table">
                            <div class="content-sub-button-table-element">
                                <span class="content-sub-button-font">Weiter</span>
                            </div>
                            <div class="content-sub-button-table-element">
                                <IconArrowRight class="content-sub-button-icon" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="content-block">
                <div class="content-block-sub-buttons">
                    <button class="content-sub-button" on:click={() => step = 1}>
                        <div class="content-sub-button-table">
                            <div class="content-sub-button-table-element">
                                <IconX class="content-sub-button-icon" />
                            </div>
                            <div class="content-sub-button-table-element">
                                <span class="content-sub-button-font">Abbrechen</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="content-section-fill" class:hidden={step !== "1"}>
            <div class="content-block">
                <h6 class="heading6">Welche Art von Produkt möchtest du einreichen?</h6>
            </div>                
            <div class="content-block">
                <div class="content-block-buttons">
                    <button class="content-button" class:active={selected === "option1.1"} on:click={() => toggle("option1.1")}>
                        <IconCode class="content-button-icon" />
                        <span class="content-button-font">Eigener Befehl</span>
                        {#if selected !== "option1.1"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option1.1"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option1.2"} on:click={() => toggle("option1.2")}>
                        <IconMessage class="content-button-icon" />
                        <span class="content-button-font">Nachrichten-Vorlage</span>
                        {#if selected !== "option1.2"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option1.2"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option1.3"} on:click={() => toggle("option1.3")}>
                        <IconPhotoSpark class="content-button-icon" />
                        <span class="content-button-font">Dynamisches Bild</span>
                        {#if selected !== "option1.3"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option1.3"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option1.4"} on:click={() => toggle("option1.4")}>
                        <IconBook class="content-button-icon" />
                        <span class="content-button-font">Guide-Vorschlag</span>
                        {#if selected !== "option1.4"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option1.4"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                </div>
            </div>
        </div>
        <div class="content-section-fill" class:hidden={step !== "2.1"}>
            <div class="content-block">
                <h6 class="heading6">Welche Art von Befehl möchtest du einreichen?</h6>
            </div>
            <div class="content-block">
                <div class="content-block-buttons">
                    <button class="content-button" class:active={selected === "option2.1.1.1"} on:click={() => executeToggle("option2.1.1.1", "2.1.1")}>
                        <IconCode class="content-button-icon" />
                        <span class="content-button-font">Kategorie</span>
                        {#if selected !== "option2.1.1.1"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option2.1.1.1"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                    <button class="content-button" class:active={selected === "option2.1.1.2"} on:click={() => { toggle("option2.1.1.2"); part = "2.1.1" }}>
                        <IconCode class="content-button-icon" />
                        <span class="content-button-font">Einzelner Flow</span>
                        {#if selected !== "option2.1.1.2"}
                            <IconCircle class="content-button-icon" />
                        {/if}
                        {#if selected === "option2.1.1.2"}
                            <IconCircleCheck class="content-button-icon" />
                        {/if}
                    </button>
                </div>
            </div>
        </div>
        <div class="content-section-fill" class:hidden={part === null} class:not-active={!animatePart}>
            <div class="content-block">
                <h6 class="heading6">Erzähle uns mehr über deinen Befehl.</h6>
            </div>
            <div class="content-block">
                
            </div>
        </div>
    </div>
</div>