// Filter utilities — applied via the `filter` property as single function.
// Composing multiple filters needs a helper utility (future).
import * as emit from "../emit.js";

const BLUR_VALUES = {
	none: "0",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	"2xl": "24px",
	"3xl": "40px",
};

// brightness / contrast / saturate / grayscale / sepia / invert
// share a numeric percent-ish scale; values 0..200 with a few stops.
const PERCENT_SCALE = {
	"0": "0",
	"50": "0.5",
	"75": "0.75",
	"90": "0.9",
	"100": "1",
	"110": "1.1",
	"125": "1.25",
	"150": "1.5",
	"200": "2",
};

const HUE_ROTATE_VALUES = ["0", "15", "30", "60", "90", "180"];

function emitFilter({ fullName, abbrName, fnName, valueMap, transform = (v) => v }) {
	const out = [emit.sub(fullName.toUpperCase())];
	for (const [key, val] of Object.entries(valueMap)) {
		out.push(
			emit.rule({
				selectors: emit.classPair([fullName, abbrName], key),
				property: "filter",
				value: `${fnName}(${transform(val)})`,
			})
		);
	}
	return out;
}

export default {
	fileName: "core/filter.css",
	generate(/* catalog */) {
		const out = [emit.header("FILTER UTILITIES — single-function (no composition yet)")];

		out.push(
			emit.rule({
				selectors: emit.classPair(["filter"], "none"),
				property: "filter",
				value: "none",
			})
		);

		out.push(...emitFilter({ fullName: "blur", abbrName: "blr", fnName: "blur", valueMap: BLUR_VALUES }));
		out.push(...emitFilter({ fullName: "brightness", abbrName: "brt", fnName: "brightness", valueMap: PERCENT_SCALE }));
		out.push(...emitFilter({ fullName: "contrast", abbrName: "cnt", fnName: "contrast", valueMap: PERCENT_SCALE }));
		out.push(...emitFilter({ fullName: "saturate", abbrName: "sat", fnName: "saturate", valueMap: PERCENT_SCALE }));
		out.push(
			...emitFilter({
				fullName: "grayscale",
				abbrName: "gray",
				fnName: "grayscale",
				valueMap: { "0": "0", "50": "0.5", "100": "1" },
			})
		);
		out.push(
			...emitFilter({
				fullName: "sepia",
				abbrName: "sep",
				fnName: "sepia",
				valueMap: { "0": "0", "50": "0.5", "100": "1" },
			})
		);
		out.push(
			...emitFilter({
				fullName: "invert",
				abbrName: "inv",
				fnName: "invert",
				valueMap: { "0": "0", "50": "0.5", "100": "1" },
			})
		);
		out.push(
			...emitFilter({
				fullName: "hue-rotate",
				abbrName: "hue",
				fnName: "hue-rotate",
				valueMap: Object.fromEntries(HUE_ROTATE_VALUES.map((v) => [v, `${v}deg`])),
				transform: (v) => v,
			})
		);

		return out.join("\n\n") + "\n";
	},
};
