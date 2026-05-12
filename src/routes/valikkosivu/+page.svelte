<script>
	import { resolve } from '$app/paths';
	import '$lib/valikkostyle.css';
	import { translations } from '$lib/translations';
	import { languageState } from '$lib/language.svelte';

	let t = $derived(translations[languageState.language]);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back_ios_new"
/>

<main class="valikko">
	<a href={resolve('/')} class="pallo">
		<span class="material-symbols-outlined nuoli"> arrow_back_ios_new </span>
	</a>

	<a href={resolve('/muistipeli')} class="button muistipeli">
		<span class="teksti">{t.game1name}</span>
	</a>

	<a href={resolve('/savypeli')} class="button savypeli">
		<span class="teksti">{t.game2name}</span>
	</a>

	<a href={resolve('/kolmiopeli')} class="button kolmiopeli">
		<span class="teksti">{t.game3name}</span>
	</a>
</main>
