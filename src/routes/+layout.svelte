<script>
	import "$lib/assets/css/global.css";
	import Header from "$lib/components/Header.svelte";
	import { page } from "$app/stores";
	export let data;

	$: lang = $page.url.pathname.startsWith("/de") ? "de" : "en";
	$: count = data.subNavigation?.length ?? 0;
    $: subNavigationClass = `subNavigation-${count}-columns`;

</script>

<Header {lang} {data} subNavigation={data.subNavigation} subNavigationClass={subNavigationClass} />

<main>
	<slot />
</main>