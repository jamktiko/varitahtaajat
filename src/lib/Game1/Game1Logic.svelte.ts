import { ColorAPI, type ColorData } from '$lib/API/ColorAPI';

type Difficulties = 'Easy' | 'Medium' | 'Hard';

export const difficultyLookup: Readonly<Record<Difficulties, number>> = {
	Easy: 2,
	Medium: 3,
	Hard: 4
};

export enum GameState {
	NotActive,
	Ready,
	Showing,
	Guessing,
	Results
}

export enum AnimState {
	hidden,
	start,
	end
}

export class Game1 {
	public State: GameState = $state(GameState.NotActive);
	public AnimState: AnimState = $state(AnimState.hidden);
	public UserQuess: number[] = $state([]);
	public CurrentColor: ColorData | null = $state(null);

	private _colors: ColorData[] = $state([]);
	public get Colors(): ColorData[] {
		return this._colors;
	}
	private _api: ColorAPI;
	public constructor() {
		this._api = ColorAPI.getInstance();
	}

	public resetGame() {
		this.State = GameState.NotActive;
		this.UserQuess = [];
		this._colors = [];
	}

	public async StartGame(colorAmount: number) {
		this._colors = await this._api.getRandomColorList(colorAmount);
		this.State = GameState.Ready;
	}

	public async PlayAnimationArrowAnimation(color: ColorData) {
		this.AnimState = AnimState.start;
		this.CurrentColor = color;
		await delay(2000);
		this.AnimState = AnimState.end;
	}

	public async PlayArrowShow() {
		for (const color of this._colors) {
			await this.PlayAnimationArrowAnimation(color);
		}
		this.State = GameState.Guessing;
	}

	public GetAccuracy: boolean[] = $derived(this.UserQuess.map((x, i) => x == i));

	public GetScore: number = $derived(this.GetAccuracy.filter((x) => x).length);
}

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
