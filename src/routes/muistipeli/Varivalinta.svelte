<script lang="ts">
	import { send } from '$lib/animations/ColorBoxQuess';
	import type { ColorData } from '$lib/API/ColorAPI';
	import '$lib/muistipelistyles/varivalinta.css';
	import { shuffle } from '$lib/Shuffle';
	import { flip } from 'svelte/animate';

	interface Props {
		Colors: ColorData[];
		Quess: number[];
	}

	let { Colors, Quess = $bindable() }: Props = $props();
</script>

<div class="container_varivalinta">
	<div class="grid_varivalinta">
		{#each shuffle(Colors.filter((x) => !x.checked)) as color, i (color)}
			<div
				onclick={() => {
					const ci = Colors.indexOf(color);
					Quess.push(ci);
					color.checked = true;
				}}
				out:send={{ key: color.id }}
				animate:flip
				class="cell_varivalinta"
				style="background-color: {color.hex};"
			></div>
		{/each}
	</div>
</div>
