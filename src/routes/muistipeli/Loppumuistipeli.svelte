<script lang="ts">
	import { receive } from '$lib/animations/ColorBoxQuess';
	import type { ColorData } from '$lib/API/ColorAPI';
	import '$lib/muistipelistyles/loppumuistipeli.css';
	import { flip } from 'svelte/animate';
	interface Props {
		Colors: ColorData[];
	}

	let { Colors }: Props = $props();
</script>

<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<div class="containeri">
	<div class="grid">
		{#each Colors.filter((x) => x.checked) as color (color)}
			<div
				class="cell_varivalinta"
				style="background-color: {color.hex} !important;"
				in:receive={{ key: color.id }}
				animate:flip
			></div>
		{/each}
		<!--		
		{#each { length: 20 - Colors.filter((x) => x.checked) } as _, i}
			<div class="cell"></div>
		{/each}
		-->
	</div>
	<div class="varivalintateksti_container">
		<h1 class="varivalintateksti jersey-10-regular">Valitse oikea järjestys</h1>
	</div>
</div>
