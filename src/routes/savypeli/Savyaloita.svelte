<script>
	import '$lib/savypelistyles/savypeli.css';
	import { translations } from '$lib/translations';
	import { languageState } from '$lib/language.svelte';

	let t = $derived(translations[languageState.language]);
</script>

<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<div class="notactive">
	<div class="ohjekortti">
		<h1 class="ohjeteksti jersey-10-regular">
			{t.guidegame2Title}
		</h1>
	</div>
	<button class="aloita">
		<p class="aloitateksti jersey-10-regular">{t.start}</p>
	</button>
</div>
