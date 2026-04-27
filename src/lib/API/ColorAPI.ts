export class ColorAPI {
	private readonly _endpoint: string = 'https://x-colors.yurace.pro/api/';
	private static _instance: ColorAPI | undefined = undefined;
	private constructor() {}
	getInstance(): ColorAPI {
		if (ColorAPI._instance == undefined) {
			ColorAPI._instance = new ColorAPI();
		}

		return ColorAPI._instance;
	}
}
