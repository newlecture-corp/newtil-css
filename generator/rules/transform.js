// Transform utilities — uses modern individual CSS transform properties
// (translate, rotate, scale) so multiple transforms compose naturally
// without needing CSS variable composition (which is Tailwind v3 era).
// Browser support: Chrome 104+, Firefox 72+, Safari 14.1+ (~94% globally).
import * as emit from "../emit.js";

// Rotation degrees
const ROTATE_VALUES = ["0", "45", "90", "180", "-45", "-90", "-180"];

// Scale percentages (treated as fractions: 100 -> 1.0)
const SCALE_VALUES = {
	"0": "0",
	"50": "0.5",
	"75": "0.75",
	"90": "0.9",
	"95": "0.95",
	"100": "1",
	"105": "1.05",
	"110": "1.1",
	"125": "1.25",
	"150": "1.5",
};

// Skew degrees
const SKEW_VALUES = ["0", "1", "2", "3", "6", "12"];

// transform-origin keyword values
const ORIGIN_VALUES = [
	"center",
	"top",
	"top-right",
	"right",
	"bottom-right",
	"bottom",
	"bottom-left",
	"left",
	"top-left",
];

// Map transform-origin keyword to CSS value
function originValue(v) {
	return v.replace(/-/g, " ");
}

export default {
	fileName: "core/transform.css",
	generate(catalog) {
		const space = catalog.space;

		const out = [emit.header("TRANSFORM UTILITIES — translate, rotate, scale, skew")];

		// translate-x / translate-y / translate (uses 'translate' individual property)
		out.push(emit.sub("TRANSLATE-X"));
		for (const [key, val] of Object.entries(space)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["translate-x", "trx"], key),
					property: "translate",
					value: `${val} 0`,
				})
			);
		}
		out.push(emit.sub("TRANSLATE-Y"));
		for (const [key, val] of Object.entries(space)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["translate-y", "try"], key),
					property: "translate",
					value: `0 ${val}`,
				})
			);
		}

		// rotate (uses 'rotate' individual property)
		out.push(emit.sub("ROTATE"));
		for (const v of ROTATE_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["rotate", "rot"], v),
					property: "rotate",
					value: v === "0" ? "0" : `${v}deg`,
				})
			);
		}

		// scale (uses 'scale' individual property)
		out.push(emit.sub("SCALE (uniform)"));
		for (const [key, val] of Object.entries(SCALE_VALUES)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["scale", "scl"], key),
					property: "scale",
					value: val,
				})
			);
		}

		// skew (no individual property, must use transform shorthand)
		out.push(emit.sub("SKEW-X / SKEW-Y (uses transform shorthand)"));
		for (const v of SKEW_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["skew-x", "skx"], v),
					property: "transform",
					value: `skewX(${v}deg)`,
				})
			);
		}
		for (const v of SKEW_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["skew-y", "sky"], v),
					property: "transform",
					value: `skewY(${v}deg)`,
				})
			);
		}

		// transform-origin
		out.push(emit.sub("TRANSFORM-ORIGIN"));
		for (const v of ORIGIN_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["transform-origin", "tro"], v),
					property: "transform-origin",
					value: originValue(v),
				})
			);
		}

		// transform: none (reset)
		out.push(emit.sub("TRANSFORM (reset)"));
		out.push(
			emit.rule({
				selectors: emit.classPair(["transform"], "none"),
				declarations: [
					{ property: "translate", value: "none" },
					{ property: "rotate", value: "none" },
					{ property: "scale", value: "none" },
					{ property: "transform", value: "none" },
				],
			})
		);

		return out.join("\n\n") + "\n";
	},
};
