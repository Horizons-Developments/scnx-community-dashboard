<script>
    import { IconCode, IconCircle, IconCircleCheck, IconCircleDot } from "@tabler/icons-svelte";

    let selected = null;

    function toggle(value) {
        selected = selected === value ? null : value;
    }
</script>

<div class="content">
    <div class="content-section">
        <div class="content-block">
            <h1 class="heading1">EINREICHEN</h1>
        </div>
        <div class="content-section-fill">
            <div class="content-block-fill">
                <div class="content-block">
                    <h3 class="heading3">Schritt 1</h3>
                </div>
                <div class="content-block">
                    <p class="text">Was möchtest du gerne einreichen?</p>
                </div>
                <div class="content-block">
                    <div class="content-section-buttons">
                        <button class="content-button" class:active={selected === "option1"} on:click={() => toggle("option1")}>
                            <div class="content-button-table">
                                <div class="content-button-table-element">
                                    <IconCode class="content-button-icon" />
                                </div>
                                <div class="content-button-table-element">
                                    <span class="content-button-font">Eigenen Befehl</span>
                                </div>
                                <div class="content-button-table-element">
                                    {#if selected !== "option1"}
                                        <IconCircle class="content-button-icon" />
                                    {/if}
                                    {#if selected === "option1"}
                                        <IconCircleCheck class="content-button-icon" />
                                    {/if}
                                </div>
                            </div>
                        </button>
                        <button class="content-button" class:active={selected === "option2"} on:click={() => toggle("option2")}>
                            <div class="content-button-table">
                                <div class="content-button-table-element">
                                    <IconCode class="content-button-icon" />
                                </div>
                                <div class="content-button-table-element">
                                    <span class="content-button-font">Nachrichten-Vorlage</span>
                                </div>
                                <div class="content-button-table-element">
                                    {#if selected !== "option2"}
                                        <IconCircle class="content-button-icon" />
                                    {/if}
                                    {#if selected === "option2"}
                                        <IconCircleCheck class="content-button-icon" />
                                    {/if}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>