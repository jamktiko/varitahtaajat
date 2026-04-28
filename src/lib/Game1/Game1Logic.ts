import { ColorAPI, type ColorData } from '$lib/API/ColorAPI';

type Difficulties = 'Easy' | 'Medium' | 'Hard';

const difficultyLookup: Readonly<Record<Difficulties, number>> = {
	Easy: 2,
	Medium: 3,
	Hard: 4
};

export enum GameState {
	NotActive,
	Ready,
	Showing,
	Guessing
}

export enum AnimState {
	hidden,
	start,
	end
}

export class Game1 {
	public State: GameState = GameState.NotActive;
	public AnimState: AnimState = AnimState.hidden;
	public UserQuess: number[] = [];

	private _colors: ColorData[] = [];
	private _api: ColorAPI;
	public difficulty: Difficulties;
	public constructor(difficulty: Difficulties) {
		this._api = ColorAPI.getInstance();
		this.difficulty = difficulty;
	}

	public resetGame() {
		this.State = GameState.NotActive;
		this._colors = [];
	}

	public async StartGame() {
		this._colors = await this._api.getRandomColorList(difficultyLookup[this.difficulty]);
		this.State = GameState.Ready;
	}

	public async PlayAnimation() {
		this.AnimState = AnimState.start;
		await delay;
	}

	public GetAccuracy: boolean[] = this.UserQuess.map((x, i) => x == i);

	public GetScore: number = this.GetAccuracy.map((x) => x as unknown as number).reduce(
		(acc, val) => acc + val
	);
}

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
