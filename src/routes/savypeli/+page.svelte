<script lang="ts">
	import '$lib/savypelistyles/loppusavypeli.css';
	import '$lib/savypelistyles/savypeli.css';
	import '$lib/savypelistyles/savyvalinta.css';
	import Savyaloita from './Savyaloita.svelte';
	import Loppusavypeli from './Loppusavypeli.svelte';
	import Savyvalinta from './Savyvalinta.svelte';
	import { ColorAPI } from '$lib/API/ColorAPI';
	import modal from '../modal/Modal.svelte';
	import Modal from '../modal/Modal.svelte';
	
	const api = ColorAPI.getInstance();

	let currentColor = $state('#000000');
	let currentPage = $state('aloita');
	let timer = $state(10);

	let h = $state(180);
	let s = $state(50);
	let l = $state(50);

	let userColor = $derived(`hsl(${h}, ${s}%, ${l}%)`);

	async function startGame() {
		let colorFound = false;
		let newColorhex = "";

		while (!colorFound) {
		const colorData = await api.getRandomColor();
		newColorhex = colorData.hex;

		const rgbArray = hexToRgb(newColorhex);
		if (!isItGrey(rgbArray)) {
			colorFound = true;
		}
		}

		currentColor = newColorhex;
		timer = 10;
		currentPage = 'sivu';
	}

	$effect(() => {
		if (currentPage === 'sivu') {
		const interval = setInterval (() => {
		if (timer > 0) {
			timer -= 1;
		} else {
			currentPage = 'containersavy';
		}
		}, 1000);

		return () => clearInterval(interval);
		}
	});

	let showModal = $state(false);
	let score = $state(0);

	function calculateScore() {
		const targetRgb = hexToRgb(currentColor);
		const userRgb = hslToRgb(h, s, l);
		const distance = deltaE(targetRgb, userRgb);
		score = Math.max(0, 100 - Math.round(distance));

		showModal = true;

		currentPage = 'containersavy';
	}

	function deltaE(rgbA: number[], rgbB: number[]) {
  	let labA = rgb2lab(rgbA);
  	let labB = rgb2lab(rgbB);
  	let deltaL = labA[0] - labB[0];
  	let deltaA = labA[1] - labB[1];
  	let deltaB = labA[2] - labB[2];
  	let c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  	let c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  	let deltaC = c1 - c2;
  	let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  	deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  	let sc = 1.0 + 0.045 * c1;
  	let sh = 1.0 + 0.015 * c1;
  	let deltaLKlsl = deltaL / (1.0);
  	let deltaCkcsc = deltaC / (sc);
  	let deltaHkhsh = deltaH / (sh);
  	let i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  	return i < 0 ? 0 : Math.sqrt(i);
	}

	function rgb2lab(rgb: number[]) {
  	let r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, x, y, z;
  	r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  	g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  	b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  	x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  	y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  	z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  	x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
  	y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
  	z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;
  	return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
	}

	function hexToRgb(hex: string): [number, number, number] {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);	
		const b = parseInt(hex.slice(5, 7), 16);
		return [r, g, b];
	}

	function hslToRgb(h: number, s: number, l: number): [number, number, number] {
		s /= 100;
		l /= 100;
		const k = (n: number) => (n + h / 30) % 12;
		const a = s * Math.min(l, 1 - l);
		const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
		return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
	}

	const isItGrey = (rgbArr: number[]) => {   
		const difference = Math.max(...rgbArr) -
		 Math.min(...rgbArr);   if (difference < 10) 
		 { return true;   } else {  return false;   } };
</script>

<!-- <Savyaloita> </Savyaloita> -->
<!-- <Loppusavypeli> </Loppusavypeli>  -->
<!-- <Savyvalinta> </Savyvalinta> -->

{#if currentPage === 'aloita' }
<div class="notactive">
	<div class="ohjekortti">
		<h1 class="ohjeteksti jersey-10-regular">Muista annettu väri ja valitse oikea sävy liukusäätimillä</h1>
	</div>
	<button class="aloita" onclick={startGame}>
		<p class="aloitateksti jersey-10-regular">Aloita</p>
	</button>
</div>

{:else if currentPage === 'sivu' }
<div class="sivu">
	<div class="savypeliteksti_container"> 
			<h1 class ="savyteksti"> Muista väri </h1>

	    <div class="kellopallo" style ="background-color: {currentColor};"> 
				<div class="timer"> {timer} </div>
			</div>
	</div>
</div>

{:else if currentPage === 'containersavy' }
<div class="containersavy"> 
		<div class="savyvalintateksti_container">
				<h1 class = "savyvalintateksti"> Valitse oikea väri </h1>
		</div>

	<div class="varipallo" style="background-color: {userColor};"> </div>

	<div class="slidercontainer">

			<div class="slider">
			<div class="sliderheader"> 
					<span> Hue </span>
					<span> {h}° </span>
			</div>
					<input type="range" min="0" max="360" bind:value={h} class="Hue">
			</div>
			
			<div class="slider">
			<div class="sliderheader"> 
					<span> Saturation </span>
					<span> {s}% </span>
			</div>
					<input type="range" min="0" max="100" bind:value={s} class="saturation">
			</div>

			<div class="slider">
			<div class="sliderheader"> 
					<span> Brightness </span>
					<span> {l}% </span>
			</div>
					<input type="range" min="0" max="100" bind:value={l} class="brightness">
			</div>

			
			<button class="vahvista" onclick={calculateScore}>
				<p class="vahvistateksti jersey-10-regular" >Tarkista</p>
			</button>

			<div class="modal">
			<Modal open={showModal} onClose={() => showModal = false}>
				<div class="tulos">
					<p>Sait {score} pistettä!</p>
					<button class="uusipeli" onclick={() => { showModal = false; startGame(); }}>Pelaa uudestaan</button>
				</div>
			</Modal>
			</div>
	</div>
</div>
{/if}

<style>

	 .tulos {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.uusipeli {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		background-color: #3d25c8;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

</style>