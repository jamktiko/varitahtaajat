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
	public CurrentColor: ColorData | null = null;

	private _colors: ColorData[] = [];
	public get Colors(): ColorData[] {
		return this._colors;
	}
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

	public async StartGame(colorAmount?: number) {
		let gameDifficulty = difficultyLookup[this.difficulty];

		if (colorAmount != undefined) {
			gameDifficulty = colorAmount;
		}

		this._colors = await this._api.getRandomColorList(gameDifficulty);
		this.State = GameState.Ready;
	}

	public async PlayAnimationArrowAnimation(color: ColorData) {
		this.AnimState = AnimState.start;
		this.CurrentColor = color;
		await delay(100);
		this.AnimState = AnimState.end;
	}

	public async PlayArrowShow() {
		for (const color of this._colors) {
			await this.PlayAnimationArrowAnimation(color);
		}
	}

	public GetAccuracy: boolean[] = this.UserQuess.map((x, i) => x == i);

	public GetScore: number = this.GetAccuracy.map((x) => x as unknown as number).reduce(
		(acc, val) => acc + val
	);
}

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
