<script lang="ts">
	import { ColorAPI } from '$lib/API/ColorAPI';

	const api = ColorAPI.getInstance();
</script>

{#await api.getRandomColor()}
	Loading
{:then data}
	{#if data != undefined}
		<div style="background-color: {data.hex};">test</div>
	{/if}
{/await}
<br />
{#await api.getRandomColorList(10)}
	Loading
{:then data}
	{#each data as dataEntry (dataEntry)}
		{#if dataEntry != undefined}
			<div style="background-color: {dataEntry.hex};">test</div>
		{/if}
	{/each}
{/await}
<br />
Blue Hue
{#await api.getRandomColor('blue')}
	Loading
{:then data}
	{#if data != undefined}
		<div style="background-color: {data.hex};">test</div>
	{/if}
{/await}
<br />
Green Number Hue
{#await api.getRandomColor(122)}
	Loading
{:then data}
	{#if data != undefined}
		<div style="background-color: {data.hex};">test</div>
	{/if}
{/await}
