import { crossfade, type FlyParams } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 200),

	fallback(node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
		};
	}
});

//Kaikki nämät on kopiotu Svelte:n fly animaation koodista mutta muokattu että css kohdasta poistetaan häivytys

export function flyNoDissolve(
	node: Element,
	{ delay = 0, duration = 400, easing = cubic_out, x = 0, y = 0 }: FlyParams
) {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;
	const [x_value, x_unit] = split_css_unit(x);
	const [y_value, y_unit] = split_css_unit(y);
	return {
		delay,
		duration,
		easing,
		css: (t: number) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});`
	};
}

function cubic_out(t: number) {
	const f = t - 1.0;
	return f * f * f + 1.0;
}

function split_css_unit(value: number | string): [number, string] {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split
		? [parseFloat(split[1]), split[2] || 'px']
		: [typeof value == 'string' ? parseInt(value) : value, 'px'];
}
