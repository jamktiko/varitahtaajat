<script>
	import '$lib/savypelistyles/loppusavypeli.css';
	import { translations } from '$lib/translations';
	import { languageState } from '$lib/language.svelte';

	let t = $derived(translations[languageState.language]);
</script>

<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />

<div class="sivu">
	<div class="savypeliteksti_container">
		<h1 class="savyteksti">{t.remember}</h1>
	</div>
	<div class="kellopallo"></div>
</div>
