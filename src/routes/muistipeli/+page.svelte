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
	import ScoreStore, { type Scores } from '$lib/LocalStore/LocalStore.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { onDestroy } from 'svelte';

	let ScoreStoreState: Scores | undefined = $state();

	const isTabletOrBiggerMQ = new MediaQuery('min-width: 768px');
	const scoreStoreUnsub = ScoreStore.subscribe((x) => (ScoreStoreState = x));
	let rounds: number = $state(2);

	async function startGame() {
		console.log('test');
		gameLogic.resetGame();
		await gameLogic.StartGame(Math.min(rounds, 16));
		console.log(gameLogic.State);
		await gameLogic.PlayArrowShow();
		console.log(gameLogic.State);
	}

	async function NextRound() {
		rounds += 1;
		await startGame();
	}

	function exit() {
		if (ScoreStoreState != undefined) {
			let game1Scores = ScoreStoreState?.Game1;
			game1Scores?.push({ Score: rounds, Time: Date.now() });
			ScoreStore.set({ Game1: game1Scores });
		}
		goto(resolve('/'));
	}

	onDestroy(() => {
		if (scoreStoreUnsub) {
			scoreStoreUnsub();
		}
	});
	$inspect(gameLogic.State);
	$inspect(gameLogic.AnimState);
</script>

{#if gameLogic.State == GameState.NotActive}
	<Aloita onClick={() => startGame()} />
{/if}

{#if gameLogic.State == GameState.Ready}
	{#if isTabletOrBiggerMQ.current}
		<div class="animHolder">
			{#if gameLogic.AnimState == AnimState.start}
				<div
					class="tempAnim"
					in:flyNoDissolve={{ x: '100vw', y: '0', duration: 2000 }}
					style="background-color: {gameLogic.CurrentColor?.hex};"
				></div>
			{/if}
		</div>
	{:else}
		<div class="animHolder">
			{#if gameLogic.AnimState == AnimState.start}
				<div
					class="tempAnim"
					in:flyNoDissolve={{ x: '0', y: '100vh', duration: 2000 }}
					style="background-color: {gameLogic.CurrentColor?.hex};"
				></div>
			{/if}
		</div>
	{/if}
{/if}

{#if gameLogic.State == GameState.Guessing}
	<Loppumuistipeli bind:Colors={gameLogic.Colors}></Loppumuistipeli>
	<Varivalinta bind:Colors={gameLogic.Colors} bind:Quess={gameLogic.UserQuess} />
{/if}

{#if gameLogic.Colors.filter((x) => !x.checked).length == 0 && gameLogic.State == GameState.Guessing}
	<Modal
		open={true}
		onClose={null}
		onMenu={exit}
		onRestart={startGame}
		onNextLevel={NextRound}
		bind:Score={gameLogic.GetScore}
		bind:Quesses={gameLogic.Colors.length}
	/>
{/if}
