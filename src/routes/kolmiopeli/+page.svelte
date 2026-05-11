<script>
	import '$lib/kolmiopelistyles/kolmiopeliohje.css';
	import '$lib/kolmiopelistyles/kolmio.css';
	import Kolmiopeliohje from './Kolmiopeliohje.svelte';
	import Kolmio from './Kolmio.svelte';
	let showGuide = $state(true);
</script>

{#if showGuide}
	<Kolmiopeliohje onStart={() => (showGuide = false)} />
{:else}
	<Kolmio onBack={() => (showGuide = true)} />
{/if}
