// Effects utilities — opacity, box-shadow, cursor, visibility, overflow,
// transition (basic).
import * as emit from "../emit.js";

const CURSOR_VALUES = [
	"auto",
	"default",
	"pointer",
	"wait",
	"text",
	"move",
	"help",
	"not-allowed",
	"none",
	"grab",
	"grabbing",
	"crosshair",
	"zoom-in",
	"zoom-out",
];

const VISIBILITY_VALUES = ["visible", "hidden", "collapse"];
const OVERFLOW_VALUES = ["auto", "hidden", "visible", "scroll", "clip"];

export default {
	fileName: "core/effects.css",
	generate(catalog) {
		const out = [emit.header("EFFECTS UTILITIES")];

		// opacity
		out.push(emit.sub("OPACITY"));
		for (const [key, value] of Object.entries(catalog.opacity)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["opacity", "op"], key),
					property: "opacity",
					value,
				})
			);
		}

		// box-shadow
		out.push(emit.sub("BOX-SHADOW"));
		for (const [key, value] of Object.entries(catalog.shadow)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["box-shadow", "bsh"], key),
					property: "box-shadow",
					value,
				})
			);
		}

		// cursor
		out.push(emit.sub("CURSOR"));
		for (const v of CURSOR_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["cursor", "cur"], v),
					property: "cursor",
					value: v,
				})
			);
		}

		// visibility
		out.push(emit.sub("VISIBILITY"));
		for (const v of VISIBILITY_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["visibility", "vis"], v),
					property: "visibility",
					value: v,
				})
			);
		}

		// overflow (and per-axis)
		out.push(emit.sub("OVERFLOW"));
		for (const v of OVERFLOW_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["overflow", "of"], v),
					property: "overflow",
					value: v,
				})
			);
		}
		for (const v of OVERFLOW_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["overflow-x", "ofx"], v),
					property: "overflow-x",
					value: v,
				})
			);
		}
		for (const v of OVERFLOW_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["overflow-y", "ofy"], v),
					property: "overflow-y",
					value: v,
				})
			);
		}

		// transition-duration
		out.push(emit.sub("TRANSITION-DURATION"));
		for (const [key, value] of Object.entries(catalog.duration)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["transition-duration", "tdur"], key),
					property: "transition-duration",
					value,
				})
			);
		}

		// transition-timing-function
		out.push(emit.sub("TRANSITION-TIMING-FUNCTION"));
		for (const [key, value] of Object.entries(catalog.ease)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["transition-timing-function", "ttf"], key),
					property: "transition-timing-function",
					value,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
