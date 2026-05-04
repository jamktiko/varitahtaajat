<script lang="ts">
	import '$lib/muistipelistyles/muistipeli.css';

	interface Props {
		onClick: () => void;
	}

	let { onClick }: Props = $props();
</script>

<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<div class="notactive">
	<div class="ohjekortti">
		<h1 class="ohjeteksti jersey-10-regular">Muista annetut värit ja valitse oikea järjestys</h1>
	</div>
	<button class="aloita" onclick={() => onClick()}>
		<p class="aloitateksti jersey-10-regular">Aloita</p>
	</button>
</div>
