<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import { localeInfo } from "./langSupport.ts";

    const pageLocales = ["en-CA", "he-IL", "ja-JP"];
    let showLocaleMenu = $state(false);
    function openLocaleMenu() {
        if (showLocaleMenu) {
            showLocaleMenu = false;
        } else {
            showLocaleMenu = true;
        }
    }

    function changeLocale(localeString: string) {
        locale.set(localeString);
    }
</script>


<button class="invis" onclick={() => openLocaleMenu()}>
    <img src="/globe.svg" alt="translate" width="20px" height="20px" style="filter: invert(1);">
    <div class="locale-menu" style="display: {showLocaleMenu ? 'flex' : 'none'}">
        {#each pageLocales as lang}
            <div onclick={() => changeLocale(lang)}>
                <img src={localeInfo[lang].flag} alt={lang} />
                <span>{localeInfo[lang].name}</span>
            </div>
        {/each}
    </div>
</button>

<style>
    .invis {
        background-color: transparent;
        border: none;
        position: relative;
        color: white;
        padding-right: 8px;
        cursor: pointer;
    }

    .locale-menu {
        display: flex;
        position: absolute;
        top: 28px;
        right: 8px;
        flex-direction: column;
        border: 3px solid #79b8d4;
        border-radius: 10px;
        width: 190px;
        backdrop-filter: brightness(0.5);
    } .locale-menu div {
        display: flex;
        padding: 8px;
    } .locale-menu div img {
        width: 24px;
        margin-right: 5px;
    } .locale-menu div span {
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 18px;
    }
</style>
