// Outline utilities — outline-width / style / color / offset.
// Note: outline doesn't take up layout space (unlike border).
import * as emit from "../emit.js";

const STYLE_VALUES = ["none", "solid", "dashed", "dotted", "double"];

const SPECIAL_COLORS = {
	transparent: "transparent",
	current: "currentColor",
	white: "#ffffff",
	black: "#000000",
};

export default {
	fileName: "core/outline.css",
	generate(catalog) {
		const widths = catalog["border-width"]; // reuse same scale
		const colors = { ...SPECIAL_COLORS, ...catalog.color };
		const space = catalog.space; // for offset

		const out = [emit.header("OUTLINE UTILITIES")];

		out.push(emit.sub("OUTLINE-WIDTH"));
		for (const [key, value] of Object.entries(widths)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["outline-width", "olw"], key),
					property: "outline-width",
					value,
				})
			);
		}

		out.push(emit.sub("OUTLINE-STYLE"));
		for (const v of STYLE_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["outline-style", "ols"], v),
					property: "outline-style",
					value: v,
				})
			);
		}

		out.push(emit.sub("OUTLINE-COLOR"));
		for (const [key, value] of Object.entries(colors)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["outline-color", "olc"], key),
					property: "outline-color",
					value,
				})
			);
		}

		out.push(emit.sub("OUTLINE-OFFSET"));
		for (const [key, value] of Object.entries(space)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["outline-offset", "olo"], key),
					property: "outline-offset",
					value,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
