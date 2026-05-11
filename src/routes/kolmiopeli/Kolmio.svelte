<script lang="ts">
	import '$lib/kolmiopelistyles/kolmio.css';
	import { ColorAPI, type ColorData } from '$lib/API/ColorAPI';
	let { onBack } = $props();

	let isSpinning = $state(false);
	let gameState = $state<'start' | 'spinning' | 'guessing' | 'result'>('start');

	let playerR = $state('');
	let playerG = $state('');
	let playerB = $state('');
	let resultText = $state('');

	let pageColor = $state('#d9d9d9');

	const colorAPI = ColorAPI.getInstance();

	async function spinTriangle() {
		if (gameState === 'spinning') return;

		gameState = 'spinning';
		isSpinning = true;
		resultText = '';

		try {
			const newColor = await colorAPI.getRandomColor();

			setTimeout(() => {
				currentColor = newColor;
				isSpinning = false;
				gameState = 'guessing';
			}, 2000);
		} catch (error) {
			console.error(error);
			isSpinning = false;
			gameState = 'start';
			resultText = 'Color loading failed. Try again.';
		}
	}
	/*Typing input codes*/
	function checkAnswer() {
		if (!currentColor) {
			resultText = 'Spin first!';
			return;
		}

		if (playerR === '' || playerG === '' || playerB === '') {
			resultText = 'Fill all RGB boxes!';
			return;
		}

		const r = Number(playerR);
		const g = Number(playerG);
		const b = Number(playerB);

		const correctR = currentColor.RGBComponents.R;
		const correctG = currentColor.RGBComponents.G;
		const correctB = currentColor.RGBComponents.B;

		const differenceR = Math.abs(r - correctR);
		const differenceG = Math.abs(g - correctG);
		const differenceB = Math.abs(b - correctB);

		const totalDifference = differenceR + differenceG + differenceB;

		const maxDifference = 255 * 3;

		const accuracy = Math.round(100 - (totalDifference / maxDifference) * 100);

		accuracyPercent = accuracy;

		resultText = `${accuracy}% correct! RGB(${correctR}, ${correctG}, ${correctB})`;
		pageColor = currentColor.hex;
		gameState = 'result';
	} /*RETRY*/
	function retryGame() {
		playerR = '';
		playerG = '';
		playerB = '';
		resultText = '';
		currentColor = null;
		gameState = 'start';
		accuracyPercent = null;
	}

	/*Button states*/
	function handleMainButton() {
		if (gameState === 'start') {
			spinTriangle();
		} else if (gameState === 'guessing') {
			checkAnswer();
		} else if (gameState === 'result') {
			retryGame();
		}
	}
	function getMainButtonText() {
		if (gameState === 'start') return 'Launch';
		if (gameState === 'spinning') return 'Spinning...';
		if (gameState === 'guessing') return 'Check';
		if (gameState === 'result') return 'Retry';

		return 'Launch';
	}
	/*Percents*/
	let accuracyPercent = $state<number | null>(null);

	/*Background change*/
	let currentColor = $state<ColorData | null>(null);
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back_ios_new"
/>
<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
<div class="pagekolmio" style:background-color={pageColor}>
	<div class="containerkolmio">
		<button onclick={onBack} class="pallo">
			<span class="material-symbols-outlined nuoli"> arrow_back_ios_new </span>
		</button>
		<div class="jersey-10-regular kolmioteksti1">
			{resultText || 'Press Start'}
		</div>
		<div class="jersey-10-regular percentit">
			{accuracyPercent !== null ? `${accuracyPercent}%` : '0%'}
		</div>
		<div class="playground">
			<svg
				class="spinnerkolmio"
				style={`--triangle-color: ${currentColor?.hex ?? '#d9d9d9'}`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 202 178"
				fill="none"
			>
				<g class:spinning={isSpinning} class="triangle-rotator">
					<path
						d="M92.2873 172.5C96.1363 179.167 105.759 179.167 109.608 172.5L200.54 15C204.389 8.33334 199.578 0 191.88 0H10.0149C2.31691 0 -2.49435 8.33333 1.35465 15L92.2873 172.5Z"
						fill="#D8C092"
					/>
				</g>
			</svg>
		</div>
		<div class="rgb-grid">
			<div class="rgb-card">
				<div class="rgb-letter jersey-10-regular">R</div>
				<input
					class="rgb-box jersey-10-regular"
					type="number"
					min="0"
					max="255"
					bind:value={playerR}
					placeholder="0"
				/>
			</div>

			<div class="rgb-card">
				<div class="rgb-letter jersey-10-regular">G</div>
				<input
					class="rgb-box jersey-10-regular"
					type="number"
					min="0"
					max="255"
					bind:value={playerG}
					placeholder="0"
				/>
			</div>

			<div class="rgb-card">
				<div class="rgb-letter jersey-10-regular">B</div>
				<input
					class="rgb-box jersey-10-regular"
					type="number"
					min="0"
					max="255"
					bind:value={playerB}
					placeholder="0"
				/>
			</div>
		</div>
		<button
			class="kolmiomainbutton jersey-10-regular"
			onclick={handleMainButton}
			disabled={gameState === 'spinning'}
		>
			{getMainButtonText()}
		</button>
	</div>
</div>
