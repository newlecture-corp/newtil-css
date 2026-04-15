// Blend mode utilities — mix-blend-mode, background-blend-mode, isolation.
import * as emit from "../emit.js";

const BLEND_MODES = [
	"normal",
	"multiply",
	"screen",
	"overlay",
	"darken",
	"lighten",
	"color-dodge",
	"color-burn",
	"hard-light",
	"soft-light",
	"difference",
	"exclusion",
	"hue",
	"saturation",
	"color",
	"luminosity",
	"plus-darker",
	"plus-lighter",
];

const ISOLATION = ["auto", "isolate"];

export default {
	fileName: "core/blend.css",
	generate(/* catalog */) {
		const out = [emit.header("BLEND UTILITIES — mix-blend-mode, background-blend-mode, isolation")];

		out.push(emit.sub("MIX-BLEND-MODE"));
		for (const v of BLEND_MODES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["mix-blend-mode", "mbm"], v),
					property: "mix-blend-mode",
					value: v,
				})
			);
		}

		out.push(emit.sub("BACKGROUND-BLEND-MODE"));
		for (const v of BLEND_MODES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-blend-mode", "bbm"], v),
					property: "background-blend-mode",
					value: v,
				})
			);
		}

		out.push(emit.sub("ISOLATION"));
		for (const v of ISOLATION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["isolation", "iso"], v),
					property: "isolation",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
