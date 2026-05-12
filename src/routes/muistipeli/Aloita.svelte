<script lang="ts">
	import '$lib/muistipelistyles/muistipeli.css';
	import { translations } from '$lib/translations';
	import { languageState } from '$lib/language.svelte';

	let t = $derived(translations[languageState.language]);

	interface Props {
		onClick: () => void;
	}

	let { onClick }: Props = $props();
</script>

<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<div class="notactive">
	<div class="ohjekortti">
		<h1 class="ohjeteksti jersey-10-regular">{t.guidegame1Title}</h1>
	</div>
	<button class="aloita" onclick={() => onClick()}>
		<p class="aloitateksti jersey-10-regular">{t.start}</p>
	</button>
</div>
