// Backdrop-filter utilities — same function set as filter, applied to
// element's backdrop (behind it) instead of element itself.
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

function emitBackdrop({ fullName, abbrName, fnName, valueMap, transform = (v) => v }) {
	const out = [emit.sub(`BACKDROP-${fullName.toUpperCase()}`)];
	for (const [key, val] of Object.entries(valueMap)) {
		out.push(
			emit.rule({
				selectors: emit.classPair([`backdrop-${fullName}`, `bd${abbrName}`], key),
				property: "backdrop-filter",
				value: `${fnName}(${transform(val)})`,
			})
		);
	}
	return out;
}

export default {
	fileName: "core/backdrop-filter.css",
	generate(/* catalog */) {
		const out = [emit.header("BACKDROP-FILTER UTILITIES")];

		out.push(
			emit.rule({
				selectors: emit.classPair(["backdrop-filter"], "none"),
				property: "backdrop-filter",
				value: "none",
			})
		);

		out.push(...emitBackdrop({ fullName: "blur", abbrName: "blr", fnName: "blur", valueMap: BLUR_VALUES }));
		out.push(...emitBackdrop({ fullName: "brightness", abbrName: "brt", fnName: "brightness", valueMap: PERCENT_SCALE }));
		out.push(...emitBackdrop({ fullName: "contrast", abbrName: "cnt", fnName: "contrast", valueMap: PERCENT_SCALE }));
		out.push(...emitBackdrop({ fullName: "saturate", abbrName: "sat", fnName: "saturate", valueMap: PERCENT_SCALE }));
		out.push(
			...emitBackdrop({
				fullName: "grayscale",
				abbrName: "gray",
				fnName: "grayscale",
				valueMap: { "0": "0", "50": "0.5", "100": "1" },
			})
		);
		out.push(
			...emitBackdrop({
				fullName: "invert",
				abbrName: "inv",
				fnName: "invert",
				valueMap: { "0": "0", "50": "0.5", "100": "1" },
			})
		);
		out.push(
			...emitBackdrop({
				fullName: "hue-rotate",
				abbrName: "hue",
				fnName: "hue-rotate",
				valueMap: Object.fromEntries(HUE_ROTATE_VALUES.map((v) => [v, `${v}deg`])),
			})
		);

		return out.join("\n\n") + "\n";
	},
};
