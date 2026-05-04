export interface ColorAPIParams {
	Amount?: number;
}

interface RawColorData {
	hex: string;
	rgb: string;
	hsl: string;
}

interface RGBObject {
	R: number;
	G: number;
	B: number;
}

interface HEXObject {
	R: string;
	G: string;
	B: string;
}

interface HSLObject {
	Hue: number;
	Saturation: number;
	Lightness: number;
}

export interface ColorData extends RawColorData {
	id: string;
	checked: boolean;
	RGBComponents: RGBObject;
	HEXComponents: HEXObject;
	HSLComponents: HSLObject;
}

import { v4 as uuid } from 'uuid';

export class ColorAPI {
	private readonly _endpoint: string = 'https://x-colors.yurace.pro/api/';
	private static _instance: ColorAPI | undefined = undefined;
	private constructor() {}
	public static getInstance(): ColorAPI {
		if (ColorAPI._instance == undefined) {
			ColorAPI._instance = new ColorAPI();
		}

		return ColorAPI._instance;
	}

	async getRandomColor(hue?: number | string): Promise<ColorData> {
		let requestURL = this._endpoint + 'random/';

		if (typeof hue == 'number') {
			if (hue < 0 || hue > 359) {
				throw new Error('Number is not in the valid range [0-359]');
			}

			requestURL += hue.toString();
		}

		if (typeof hue == 'string') {
			requestURL += hue;
		}

		const request = await fetch(requestURL);

		if (!request.ok) {
			console.log(JSON.stringify(request.body));
			throw new Error('API Request has errored out');
		}
		return ExtractComponents(await request.json());
	}

	async getRandomColorList(amount: number, hue?: number | string): Promise<ColorData[]> {
		let requestURL = this._endpoint + 'random/';

		if (typeof hue == 'number') {
			if (hue < 0 || hue > 359) {
				throw new Error('Number is not in the valid range [0-359]');
			}

			requestURL += hue.toString();
		}

		if (typeof hue == 'string') {
			requestURL += hue;
		}

		requestURL += '?number=' + amount;

		const request: Response = await fetch(requestURL);

		if (!request.ok) {
			console.log(JSON.stringify(request.body));
			throw new Error('API Request has errored out');
		}

		const rawData: RawColorData[] = await request.json();

		const extratedData: ColorData[] = [];

		console.log(rawData);

		rawData.forEach((i) => {
			extratedData.push(ExtractComponents(i));
		});

		return extratedData;
	}
}

function ExtractComponents(data: RawColorData): ColorData {
	const Hex: HEXObject = {
		B: data.hex.substring(1, 3),
		G: data.hex.substring(3, 5),
		R: data.hex.substring(5)
	};

	const RGBRegex = /(?<=rgb\()([0-9]{1,3})(?:, )([0-9]{1,3})(?:, )([0-9]{1,3})(?=\))/;

	const RGBCaptures = RGBRegex.exec(data.rgb);

	let RGB: RGBObject;

	if (RGBCaptures != null && RGBCaptures.length == 4) {
		RGB = {
			R: parseInt(RGBCaptures[1]),
			G: parseInt(RGBCaptures[2]),
			B: parseInt(RGBCaptures[3])
		};
	} else {
		throw new Error('RGB extraction failed');
	}

	const HSLRegx = /(?<=hsl\()([0-9]{1,3})(?:, )([0-9]{1,3})(?:%, )([0-9]{1,3})(?=%\))/;

	const HSLCaptures = HSLRegx.exec(data.hsl);

	let HSL: HSLObject;

	if (HSLCaptures != null && HSLCaptures.length == 4) {
		HSL = {
			Hue: parseInt(HSLCaptures[1]),
			Saturation: parseInt(HSLCaptures[2]),
			Lightness: parseInt(HSLCaptures[3])
		};
	} else {
		throw new Error('HSL extration failed');
	}

	return {
		id: uuid(),
		checked: false,
		HEXComponents: Hex,
		RGBComponents: RGB,
		HSLComponents: HSL,
		hex: data.hex,
		rgb: data.rgb,
		hsl: data.hsl
	};
}
