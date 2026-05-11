import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface ScoreEntry {
	Score: number;
	Time: number;
}

export interface Scores {
	Game1: ScoreEntry[];
}

function GetData() {
	if (!browser) {
		const newData: Scores = {
			Game1: []
		};
		return newData;
	}

	const data = localStorage.getItem('score');

	if (data == null) {
		const newData: Scores = {
			Game1: []
		};
		return newData;
	}

	return JSON.parse(data);
}

const storageScore: Scores = GetData();

const ScoreStore = writable<Scores>(storageScore);

const writeSub = ScoreStore.subscribe((x) => {
	localStorage.setItem('Score', JSON.stringify(x));
});

onDestroy(() => {
	if (writeSub) {
		writeSub();
	}
});

export default ScoreStore;
