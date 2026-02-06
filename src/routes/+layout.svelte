<script>
	import "$lib/assets/css/global.css";
	import Header from "$lib/components/Header.svelte";
	import { page } from "$app/stores";
	export let data;

	$: lang = $page.url.pathname.startsWith("/de") ? "de" : "en";
</script>

<Header {lang} {data} />

<main>
	<slot />
</main>