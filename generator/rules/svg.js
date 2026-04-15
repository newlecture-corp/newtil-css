// SVG utilities — fill, stroke, stroke-width.
import * as emit from "../emit.js";

const SPECIAL_COLORS = {
	none: "none",
	transparent: "transparent",
	current: "currentColor",
	white: "#ffffff",
	black: "#000000",
};

export default {
	fileName: "core/svg.css",
	generate(catalog) {
		const colors = { ...SPECIAL_COLORS, ...catalog.color };
		const widths = catalog["border-width"];
		const out = [emit.header("SVG UTILITIES — fill, stroke, stroke-width")];

		out.push(emit.sub("FILL"));
		for (const [key, value] of Object.entries(colors)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["fill"], key),
					property: "fill",
					value,
				})
			);
		}

		out.push(emit.sub("STROKE"));
		for (const [key, value] of Object.entries(colors)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["stroke"], key),
					property: "stroke",
					value,
				})
			);
		}

		out.push(emit.sub("STROKE-WIDTH"));
		for (const [key, value] of Object.entries(widths)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["stroke-width", "sw"], key),
					property: "stroke-width",
					value,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
