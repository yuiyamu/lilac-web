<svelte:head>
    <title>yurukyan△ | {page.status}</title>
</svelte:head>

<script lang="ts">
    import { page } from '$app/state';
</script>

<div id="page">
    <a id="header" href="https://yuru.ca/">
        <div id="shima-img"></div>
        <h1>{page.status}△</h1>
        <h2>{page.error?.message.toLowerCase()}</h2>
    </a>
    <strong>- english -</strong>
    <p>
        {#if page.status === 404}
            sorry, the page you're looking for does not exist.
        {:else if page.status === 500}
            sorry, the server ran into an internal error.
        {:else}
            sorry, an unknown error occured.
        {/if}
        <br>
        <a href="https://yuru.ca">click here</a> to go back to the site homepage.
    </p>
    <div style="display: flex; justify-content: center;">
        <div id="divider"></div>
    </div>
    <strong>- 日本語 -</strong>
    <p>
        {#if page.status === 404}
            ごめんなさいが、探してるのページは存在ではありません。
        {:else if page.status === 500}
            ごめんなさいが、サーバーで内部エラーが発生しました。
        {:else}
            ごめんなさいが、不明なエラーが発生しました。
        {/if}
        <br>
        ホームページに戻るには、<a href="https://yuru.ca">ここ</a>をクリックしてください。
    </p>
    <div style="display: flex; justify-content: center;">
        <div id="divider"></div>
    </div>
    <strong>- עברית -</strong>
    <p dir="rtl">
        {#if page.status === 404}
            אנחנו מצתערות, העמוד שחיפשת לא קיים.
        {:else if page.status === 500}
            אנחנו מצתערות, השרת נתקל בשגיאה פנימית.
        {:else}
            קרתה שגיאה לא ידועה.
        {/if}
        <br>
        <a href="https://yuru.ca">לחצו כאן</a> כדי לחצור בחזרה לדף הראשי.
    </p> <!-- ~<3 - anne -->
</div>

<style>
    /* basic stuff, moving away from yuru base.css */
    @font-face { font-family: Kyokasho; src: url('/Kyokasho-min.woff2') format('woff2')}
    @font-face { font-family: Zen Kaku Gothic New; src: url('/ZenKakuGothicNew.woff2') format('woff2')}

    :root {
        --text: #b4b5bf;
        --link: #646570;
        --background: #282828;
        --page: #816d8a;
    }

    :global(body) {
        background-color: var(--background);
        color: white;
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 16px;
        margin: 0;
    }

    a {
        color: var(--link);
    }

    #page {
        position: relative;
        padding: 30px 30px;
        text-align: center;
        background-color: var(--page);
        border-radius: 10px;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 35px;
    }

    #header {
        display: flex;
        text-align: left;
        align-items: center;
        text-decoration: none;
    }

    #shima-img {
        background-image: url("/error.webp");
        background-size: cover;
        box-shadow: 0 0 6px 6px var(--page) inset;
        width: 100px;
        height: 100px;
    }

    h1 {
        display: inline;
        font-family: Kyokasho, sans-serif;
        font-weight: normal;
        color: white;
        font-size: 70px;
        margin-left: 10px;
        margin-top: 0;
        margin-bottom: 0;
    }

    h2 {
        font-size: 30px;
        margin-left: 10px;
    }

    strong {
        color: var(--offwhite);
    } p {
        color: var(--offwhite);
        margin-top: 0;
    }

    a {
        color: var(--text);
    }

    #divider {
        height: 3px;
        width: 50%;
        background: linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 15%, rgba(255, 255, 255, 0.4) 85%, rgba(255, 255, 255, 0) 100%);
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
