<script>
    import "$lib/assets/css/header.css";
    import logo from "$lib/assets/images/logo.png";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { get } from "svelte/store";
    import { onMount } from "svelte";
    import { navigationOpen } from "$lib/js/navigation";
    import { IconHome } from "@tabler/icons-svelte";
    import { IconApps } from "@tabler/icons-svelte";
    import { IconCode } from "@tabler/icons-svelte";
    import { IconChevronLeft } from "@tabler/icons-svelte";
    import { IconChevronRight } from "@tabler/icons-svelte";
	import { pgTable } from "drizzle-orm/pg-core";
    export let lang = "en";
    export let data;
    export let subNavigation = [];
    export let subNavigationClass = "";

    function switchLanguage(lang) {
        const switcher = document.querySelector(".language-switcher");

        switcher.classList.toggle("en", lang === "en");
        switcher.classList.toggle("de", lang === "de");

        setTimeout(() => {
            performSwitchLanguage(lang);
        }, 125);

    }

    function performSwitchLanguage(lang) {
        const currentUrl = $page.url.pathname;
            
        let newUrl;

        if (lang === "en") {
            newUrl = currentUrl.replace(/^\/(de|en)/, '');
            if (newUrl === "") {
                newUrl = "/";
            }
        }

        if (lang === "de") {
            if (currentUrl.startsWith("/de")) {
                newUrl = currentUrl;
            }
            if (currentUrl.startsWith("/en")) {
                newUrl = currentUrl.replace(/^\/en(?=\/|$)/, "/de");
            }
            if (!currentUrl.startsWith("/de") && !currentUrl.startsWith("/en")) {
                newUrl = "/de" + currentUrl;
            }
        }

        if (!newUrl.endsWith("/")) {
            newUrl += "/";
        }

        goto(newUrl, { keepfocus: true, noScroll: true });
    }

    let submenuOpen = null;

    function openSubmenu(name) {
        submenuOpen = name;
    }

    function closeNavigation() {
        navigationOpen.set(false);
        submenuOpen = null;
    }

</script>

{#if lang === "en"}
    <header class="header">
        <div class="branding-container">
            <a href="/">
                <img class="branding-logo" src={logo} alt="SCNX Community Logo">
                <span class="branding-sitetitle">Dashboard</span>
            </a>
        </div>
        <button class="navigation-toggle" class:open={$navigationOpen} on:click={() => navigationOpen.update(v => !v)} aria-label="Open/close menu">
            <span></span>
        </button>
    </header>

    <nav class="navigation" class:navigation-open={$navigationOpen}>

        <ul class="navigation-menu">
            <li class="navigation-section">
                <div class="language-switcher" class:de={lang === "de"} class:en={lang === "en"}>
                    <div class="language-switcher-slider"></div>
                    <div class="language-switcher-element">
                        <button class="language-switcher-label {lang === "de" ? "language-switcher-label-active" : ""}" on:click={() => switchLanguage("de")}>
                            <img class="language-switcher-image" src="/images/country-flags/de.png" alt="DE">
                            <span class="language-switcher-font">DE</span>
                        </button>
                    </div>
                    <div class="language-switcher-element">
                        <button class="language-switcher-label {lang === "en" ? "language-switcher-label-active" : ""}" on:click={() => switchLanguage("en")}>
                            <img class="language-switcher-image" src="/images/country-flags/us.png" alt="EN">
                            <span class="language-switcher-font">EN</span>
                        </button>
                    </div>
                </div>
            </li>
            
            <li class="navigation-element">
                {#if data.user}
                    <img class="navigation-icon" src="{data.user.avatarUrl}" alt="Profilbild">
                {/if}
            </li>

            <li class="navigation-section">
                <span class="navigation-line"></span>
            </li>

            <li class="navigation-element">
                <div class="navigation-table">
                    <div class="navigation-table-element">
                        <IconHome class="navigation-icon" />
                    </div>
                    <div class="navigation-table-element">
                        <a class="navigation-link" href="/de/">Home</a>
                    </div>
                </div>
            </li>

            <li class="navigation-element navigation-element-active">
                <input class="navigation-input" type="checkbox" id="navigation-input-1" aria-hidden="true">
                <label class="navigation-label" for="navigation-input-1">
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconApps class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <p class="navigation-link">Content</p>
                        </div>
                        <div class="navigation-table-element">
                            <IconChevronRight class="navigation-icon" />
                        </div> 
                    </div>
                </label>

                <ul class="navigation-submenu">
                    <div class="navigation-section">                    
                        <li class="navigation-element">
                            <label class="navigation-label" for="navigation-input-1">
                                <div class="navigation-table">
                                    <div class="navigation-table-element">
                                        <IconChevronLeft class="navigation-icon" />
                                    </div>
                                    <div class="navigation-table-element">
                                        <p class="navigation-link">Back</p>
                                    </div>
                                </div>
                            </label>
                        </li>

                        <span class="navigation-line"></span>
                    </div>
                    
                    <li class="navigation-element navigation-element-active"> 
                        <div class="navigation-table">
                            <div class="navigation-table-element">
                                <IconApps class="navigation-icon" />
                            </div>
                            <div class="navigation-table-element">
                                <a class="navigation-link" href="/de/content/">All Content</a>
                            </div>
                        </div>
                    </li>

                    <li class="navigation-element">
                        <input class="navigation-input" type="checkbox" id="navigation-input-1-test" aria-hidden="true">
                        <label class="navigation-label" for="navigation-input-1-test">
                            <div class="navigation-table">
                                <div class="navigation-table-element">
                                    <IconCode class="navigation-icon" />
                                </div>
                                <div class="navigation-table-element">
                                    <a class="navigation-link" href="/de/content/">Custom Commands</a>
                                </div>                        
                            </div>
                        </label>           
                    </li>
                </ul>
            </li>
        </ul>

    </nav>

{/if}

{#if lang === "de"}
    <header class="header">
        <div class="branding-container">
            <a href="/de/">
                <img class="branding-logo" src={logo} alt="SCNX Community Logo">
                <span class="branding-sitetitle">Dashboard</span>
            </a>
        </div>
        <button class="navigation-toggle" class:open={$navigationOpen} on:click={() => navigationOpen.update(v => !v)} aria-label="Open/close menu">
            <span></span>
        </button>
    </header>

    <!-- Label zum Öffnen / Schließen des Menüs -->

    <nav class="navigation" class:navigation-open={$navigationOpen}>

        <ul class="navigation-menu" class:hidden={submenuOpen !== null}>
            <li class="navigation-section">
                <div class="language-switcher" class:de={lang === 'de'} class:en={lang === 'en'}>
                    <div class="language-switcher-slider"></div>
                    <div class="language-switcher-element">
                        <button class="language-switcher-label {lang === "de" ? "language-switcher-label-active" : ""}" on:click={() => switchLanguage("de")}>
                            <img class="language-switcher-image" src="/images/country-flags/de.png" alt="DE">
                            <span class="language-switcher-font">DE</span>
                        </button>
                    </div>
                    <div class="language-switcher-element">
                        <button class="language-switcher-label {lang === "en" ? "language-switcher-label-active" : ""}" on:click={() => switchLanguage("en")}>
                            <img class="language-switcher-image" src="/images/country-flags/us.png" alt="EN">
                            <span class="language-switcher-font">EN</span>
                        </button>
                    </div>
                </div>
            </li>
            
            <li class="navigation-element">
                {#if data.user}
                    <img class="navigation-icon" src="{data.user.avatarUrl}" alt="Profilbild">
                {/if}
            </li>

            <li class="navigation-section">
                <span class="navigation-line"></span>
            </li>

            <li class="navigation-element">
                <a class="navigation-link" href="/de/" on:click={closeNavigation}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconHome class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span>Startseite</span>
                        </div>
                    </div>
                </a>
            </li>

            <li class="navigation-element navigation-element-active">
                <button class="navigation-label" on:click={() => openSubmenu("content")}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconApps class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span class="navigation-link">Inhalte</span>
                        </div>
                        <div class="navigation-table-element">
                            <IconChevronRight class="navigation-icon" />
                        </div> 
                    </div>
                </button>
            </li>

            <li class="navigation-element">
                <button class="navigation-label" on:click={() => openSubmenu("create")}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconApps class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span class="navigation-link">Erstellen</span>
                        </div>
                        <div class="navigation-table-element">
                            <IconChevronRight class="navigation-icon" />
                        </div> 
                    </div>
                </button>
            </li>
        </ul>

        <ul class="navigation-submenu" class:active={submenuOpen === "content"}>
            <li class="navigation-element">
                <button class="navigation-label" on:click={() => submenuOpen = null}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconChevronLeft class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span class="navigation-link">Zurück</span>
                        </div>
                    </div>
                </button>
            </li>

            <li class="navigation-section">
                <span class="navigation-line"></span>
            </li>
            
            <li class="navigation-element navigation-element-active">
                <a class="navigation-link" href="/de/content/" on:click={closeNavigation}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconApps class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span>Alle Inhalte</span>
                        </div>
                    </div>
                </a>
            </li>

            <li class="navigation-element">
                <a class="navigation-link" href="/de/content/" on:click={closeNavigation}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconCode class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span>Eigene Befehle</span>
                        </div>
                    </div>
                </a>
            </li>

            <li class="navigation-element">
                <a class="navigation-link" href="/de/content/" on:click={closeNavigation}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconApps class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span>Nachrichten-Vorlagen</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>

        <ul class="navigation-submenu" class:active={submenuOpen === "create"}>
            <li class="navigation-element">
                <button class="navigation-label" on:click={() => submenuOpen = null}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconChevronLeft class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span class="navigation-link">Zurück</span>
                        </div>
                    </div>
                </button>
            </li>

            <li class="navigation-section">
                <span class="navigation-line"></span>
            </li>

            <li class="navigation-element">
                <a class="navigation-link" href="/de/create/" on:click={closeNavigation}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconApps class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span>Link 1</span>
                        </div>
                    </div>
                </a>
            </li>

            <li class="navigation-element">
                <a class="navigation-link" href="/de/create/" on:click={closeNavigation}>
                    <div class="navigation-table">
                        <div class="navigation-table-element">
                            <IconApps class="navigation-icon" />
                        </div>
                        <div class="navigation-table-element">
                            <span>Link 2</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>

    </nav>

    <nav class="sub-navigation {subNavigationClass}">
        <ul class="sub-navigation-menu">
            {#each subNavigation as item}
                <li class="sub-navigation-element">
                    <svelte:component this={item.icon} class="navigation-icon" />
                </li>
            {/each}
        </ul>
    </nav>

{/if}