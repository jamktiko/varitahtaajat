import { writable } from 'svelte/store';

interface ScoreEntry {
	Score: number;
	Time: number;
}

export interface Scores {
	Game1: ScoreEntry[];
}

const ScoreStore = writable<Scores>({ Game1: [] });

export default ScoreStore;
