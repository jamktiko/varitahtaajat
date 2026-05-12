<script>
	import { resolve } from '$app/paths';
	import '$lib/aloitusstyle.css';
	import { goto } from '$app/navigation';
	import { languageState } from '$lib/language.svelte';
</script>

<div class="page">
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
		rel="stylesheet"
	/>
	<div class="container-korjaus container">
		<div class="circle">
			<a href={resolve('/valikkosivu')} class="jersey-10-regular incircle">Väripeli</a>
		</div>
		<div class="isoympyra"></div>
		<div class="ympyra1"></div>
		<div class="ympyra2"></div>
		<button onclick={() => goto(resolve('/infosivu'))} class="ympyra3-1"
			><span class="material-symbols-outlined icon-1">info</span></button
		>
		<button
			onclick={() => (languageState.language = languageState.language === 'fi' ? 'en' : 'fi')}
			class="fien-text ympyra3-2 jersey-10-regular"
			>{languageState.language === 'fi' ? 'FI' : 'EN'}</button
		>

		<div class="ympyra4-1"></div>
		<div class="ympyra4-2"></div>
	</div>
</div>
