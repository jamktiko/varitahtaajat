<script lang="ts">
	import { flyNoDissolve } from '$lib/animations/ColorBoxQuess';
	import { AnimState, Game1, GameState } from '$lib/Game1/Game1Logic.svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import Modal from './Modal.svelte';

	let gameLogic = $state(new Game1());

	import '$lib/muistipelistyles/loppumuistipeli.css';
	import '$lib/muistipelistyles/muistipeli.css';
	import '$lib/muistipelistyles/varivalinta.css';
	import Aloita from './Aloita.svelte';
	import Loppumuistipeli from './Loppumuistipeli.svelte';
	import Varivalinta from './Varivalinta.svelte';

	const isTabletOrBigger = new MediaQuery('(min-width: 768px)');

	let rounds: number = $state(1);

	async function startGame() {
		console.log('test');

		await gameLogic.StartGame(Math.min(Math.round(rounds * 1.5), 16));
		console.log(gameLogic.State);
		await gameLogic.PlayArrowShow();
		console.log(gameLogic.State);
	}

	async function NextRound() {
		rounds += 1;
		await startGame();
	}
	$inspect(gameLogic.State);
	$inspect(gameLogic.AnimState);
</script>

{#if gameLogic.State == GameState.NotActive}
	<Aloita onClick={() => startGame()} />
{/if}

{#if gameLogic.State == GameState.Ready}
	<div class="animHolder">
		{#if gameLogic.AnimState == AnimState.start}
			<div
				class="tempAnim"
				style="background-color: {gameLogic.CurrentColor?.hex};"
				in:flyNoDissolve={{ x: '0', y: '700', duration: 1000 }}
			></div>
		{/if}
	</div>
{/if}

{#if gameLogic.State == GameState.Guessing}
	<Loppumuistipeli Colors={gameLogic.Colors}></Loppumuistipeli>
	<Varivalinta Colors={gameLogic.Colors} bind:Quess={gameLogic.UserQuess} />
{/if}

{#if gameLogic.Colors.filter((x) => !x.checked).length == 0 && gameLogic.State == GameState.Guessing}
	<Modal open={true} onClose={() => NextRound()} />
{/if}
