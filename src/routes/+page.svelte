<svelte:head>
    <meta property="og:title" content="yuiyamu△">
    <meta property="og:description" content="hi, it's me lilac c:">
    <title>yuiyamu△</title>
</svelte:head>

<script lang="ts">
    import '#lib/base.css';
    import { _, locale } from 'svelte-i18n';
    import Locale from '#lib/Locale.svelte';

    async function fetchFromApi(endpoint: string) {
        //let response = import.meta.env.DEV? await fetch(`http://localhost:3333/${endpoint}`) : await fetch(`https://api.yuru.ca/${endpoint}`)
        let response = await fetch(`https://api.yuru.ca/${endpoint}`);
        if (!response.ok) {
            console.log(`failed to fetch from our endpoint, likely meaning the api is down >_<;;`);
            return null;
        } else {
            return await response.json();
        }
    }

    async function lastFmUpdate() {
        const songInfo = await fetchFromApi('lastfm');
        let isPlaying: boolean;
        let isValid = true;

        if (!songInfo) isValid = false;
        try {
            songInfo.recenttracks.track[0]['@attr'].nowplaying; //will error since this doesn't exist when not playing
            isPlaying = true;
        } catch {
            isPlaying = false;
            if (!songInfo.recenttracks) isValid = false; //if we error for some other reason tho, we want to make sure..
        }

        if (isValid) {
            return {
                isPlaying,
                "songURL": songInfo.recenttracks.track[0].url,
                "songMeta": `• ${songInfo.recenttracks.track[0].artist['#text']} - ${songInfo.recenttracks.track[0].name}`,
                "songImg": songInfo.recenttracks.track[0].image[3]['#text']
            };
        } else {
            return null;
        }
    }

    let linkContainer = ["git.yuru.ca", "pkg.yuru.ca", "remi.yuru.ca"];
    let personLinkContainer = ["lotus.anne.cat"];

    let projectInfo = [
        {"name":"shima", "link":"https://github.com/yuiyamu/shima", "description":"simple package manager based around heliotrope"},
        {"name":"heliotrope", "link":"https://github.com/yuiyamu/heliotrope", "description":"basic zip extractor/compressor made for .osz files"},
        {"name":"remishare", "link":"https://github.com/yuiyamu/remishare", "description":"personal file sharing site in svelte/ts"},
        {"name":"mrrpbot", "link":"https://github.com/yuiyamu/mrrpbot", "description":"silly little discord.js bot, mostly maintained by amynyan now"}
    ];

    let linkId = $state(-1);
    function displayLinkHover(id: number) {
      linkId = id;
    }
</script>

<div id="background"></div>
<header>
    <a class="fa fa-github hidden-link" style="color: white; font-size: 23px;" href="https://github.com/yuiyamu/lilac-web" aria-label="github link"></a>
    <Locale/>
</header>

<section id="page" class={$locale}>
    <div id="info-box">
    <div id="mobile-button-box">
        <a class="fa fa-github hidden-link" style="color: white; font-size: 23px;" href="https://github.com/yuiyamu/lilac-web" aria-label="github link"></a>
            <Locale/>
    </div>
    <img id="non" src="/non.png" alt="chinoi momone">
    <h2 id="title-container"><a href="/system">yurukyan△</a></h2>

    <div id="intro-container">
        <h3>hi, i'm</h3>
        <h1>lilac 🌸</h1>
    </div>
    <p>i'm a sysadmin that likes poking at technology, and sometimes make youtube videos about it.
        <br>natrually, i've needed to do a little coding to aid in my adventures,,
    </p>

    <div id="projects-container">
        <p style="margin-top: 5px"><span class="fish-colour">lilac</span>@yuru.ca <span class="fish-colour">~</span>&gt; projects</p>
        {#each projectInfo as project}
        <div class="project">
            <p><a href={project.link}>{project.name}</a> • <span>{project.description}</span></p>
        </div>
        {/each}
    </div>

    <div id="bottom-bar">
        <div class="socials-bar hidden-link">
            <!-- svgs i stole from shavits site :3 except youtube one -->
            <a href="https://www.youtube.com/@yuiyamu">
                <svg style="width: 18px; height: 18px;" viewBox="0 0 32 32"><path fill="currentColor" d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z"/><rect fill="none" width="32" height="32"/></svg>
                <span>youtube</span>
            </a>
            <span class="social-divide">•</span>
            <a href="https://twitter.com/yuiyamuu">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.901 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                <span>twitter</span>
            </a>
            <span class="social-divide">•</span>
            <a href="https://osu.ppy.sh/users/14829744">
                <svg viewBox="0 0 100 100"><circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-width="8"></circle><text font-family="Raleway, sans-serif" fill="currentColor" font-size="34" font-weight="700" text-anchor="middle" x="50" y="58">osu!</text></svg>
                <span>osu!</span>
            </a>
                <span class="social-divide">•</span>
            <a href="discord://-/users/245588170903781377">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                <span>discord</span>
            </a>
        </div>

        <div>
            {#await lastFmUpdate()}
            <span class="dark-text">retrieving song info...</span>
            {:then lastFmData}
                {#if !lastFmData}
                    <span class="dark-text">failed to retrieve lastfm info,, (๑-﹏-๑)</span>
                {:else}
                    <span class="dark-text">
                        {#if lastFmData.isPlaying}currently listening to
                        {:else}last listened to
                        {/if}
                        <a class="hidden-link" href={lastFmData.songURL}>{lastFmData.songMeta}</a>
                        <img class="lastfm-album-img" src={lastFmData.songImg} alt="lastfm album">
                    </span>
                {/if}
            {/await}
        </div>
    </div>
    </div>

    <div id="shima-img">
        <div id="link-container">
            {#each linkContainer as link, i}
                <div>
                    <div class="hover-dot" style="opacity: {linkId === i? 1 : 0}"></div>
                    <a href="https://{link}"
                        onmouseover={() => displayLinkHover(i)}
                        onmouseleave={() => displayLinkHover(-1)}
                        onfocus={() => displayLinkHover(i)}
                        onfocusout={() => displayLinkHover(-1)}>{link}</a>
                </div>
            {/each}
            <div id="link-divide"></div>
            {#each personLinkContainer as link, i}
                <div>
                    <div class="hover-dot" style="opacity: {linkId === i+4? 1 : 0}"></div>
                    <a href="https://{link}"
                        onmouseover={() => displayLinkHover(i+4)}
                        onmouseleave={() => displayLinkHover(-1)}
                        onfocus={() => displayLinkHover(i+4)}
                        onfocusout={() => displayLinkHover(-1)}>{link}</a>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    :root {
        --accent: #af8ebe;
    }

    #background {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-image: url("/bg.jpg");
        background-size: cover;
        background-position: center;
        z-index: -1;
    }

    .he-IL span {
        direction: rtl;
    } .he-IL p {
        direction: rtl;
    }

    /* body/header */
    header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        height: 5vh;
        margin-bottom: 0px;
    } header a {
        padding-right: 2px; /* gives spacing to the icons */
    }

    #mobile-button-box {
        display: none;
    }

    #page {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        margin-left: 18%;
        margin-right: 18%;
    }

    #info-box {
        padding: 0 40px 40px 40px;
        border: 3px solid var(--accent);
        backdrop-filter: brightness(0.5);
        border-radius: 15px;
        font-size: 18px;
    }

    /* main content */
    #title-container {
        text-align: right;
    } #title-container a {
        font-family: Kyokasho, sans-serif;
        color: var(--accent);
        font-size: 32px;
        text-decoration: none;
        font-weight: normal;
        text-shadow: -3px 4px 8px #000000;
    }

    #non {
        position: absolute;
        top: -50px;
        right: -75px;
        width: 150px;
        transform: rotate(10deg);
    }

    #intro-container h3 {
        display: inline-block;
        margin: 0;
        font-weight: normal;
    } #intro-container h1 {
        padding-left: 3px;
        display: inline-block;
        margin: 0;
    }

    /* projects */
    #projects-container {
        font-family: monospace;
        font-size: 16px;
        padding: 5px;
        margin-bottom: 15px;

        display: flex;
        flex-direction: column;
        width: 100%;
        background: #58566065;
    }

    .fish-colour {
        color: #37cc58;
    }

    .project {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
    } .project p {
        margin: 0;
    }.project img {
        height: 40%;
        margin-right: 8px;
    } .project a {
        color: white;
        text-decoration: none;
    }

    /* bottom bar */
    #bottom-bar {
        display: flex;
        justify-content: space-between;
    }

    .socials-bar {
        width: 50%;
    }
    .socials-bar a {
        display: inline-flex;
        align-items: center;
    } .socials-bar svg {
        padding-top: 4px;
        width: 16px;
        height: 16px;
    } .socials-bar span {
        margin-left: 5px;
    }
    .social-divide {
        color: var(--link);
        margin-left: 5px;
        margin-right: 5px;
    }

    .lastfm-album-img {
        width: 35px;
        border-radius: 4px;
        vertical-align: middle;
    }

    /* bottom rin */
    #shima-img {
        background-image: url("/shima.jpg");
        background-size: cover;
        height: 230px;
        margin-top: 20px;
        border: 3px solid var(--accent);
        border-radius: 15px;
    }

    #link-container div a {
        text-decoration: none;
    }

    .hover-dot {
        display: inline-block;
        opacity: 0;
        height: 10px;
        width: 10px;
        margin-right: 5px;
        background: radial-gradient(circle,rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
        filter: blur(4px);
        border-radius: 50%;
        transition: opacity 0.15s ease-in;
        vertical-align: middle;
    }

    #link-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 55%;
        height: 100%;
    }

    #link-divide {
        height: 3px;
        width: 35%;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.15) 15%,
            rgba(0, 0, 0, 0.15) 85%,
            rgba(0, 0, 0, 0) 100%
        );
        margin-top: 5px;
        margin-bottom: 5px;
    }

    /* mobile stuff */
    @media only screen and (max-device-width: 1450px) {
        #shima-img {
            background-position: 43%;
        }
    }

    @media only screen and (max-device-width: 700px) {
        #page {
            margin-left: 3%;
            margin-right: 3%;
            margin-top: 3%;
            margin-bottom: 3%;
        }

        #info-box {
            font-size: 16px;
        }

        #mobile-button-box {
            /* copied from header */
            position: absolute;
            top: 0;
            left: 0;
            width: 101%; /* absolutely horrid disgusting solution LOL */
            display: flex;
            justify-content: end;
            align-items: center;
            height: 30px;
            margin-bottom: 0px;
        }

        header {
            display: none;
        }

        h2 {
            padding-left: 0px;
        }
    }
</style>
