// Color utilities — color (text), background-color, border-color.
// Uses all semantic color tokens from design-tokens.
import * as emit from "../emit.js";

// Properties × abbreviation pairs.
// border-color is intentionally kept here (not borders.js) since it's
// purely color application, not border structure.
const PROPERTY_DEFS = [
	{ full: "color", abbr: "c", cssProperty: "color" },
	{ full: "background-color", abbr: "bg", cssProperty: "background-color" },
	{ full: "border-color", abbr: "bdc", cssProperty: "border-color" },
];

// Special non-token color values
const SPECIAL_VALUES = {
	transparent: "transparent",
	white: "#ffffff",
	black: "#000000",
	current: "currentColor",
	inherit: "inherit",
};

export default {
	fileName: "core/colors.css",
	generate(catalog) {
		const colors = catalog.color; // { 'primary': 'var(--color-primary)', ... }
		const allValues = { ...SPECIAL_VALUES, ...colors };

		const out = [emit.header("COLOR UTILITIES — color, background-color, border-color")];

		for (const { full, abbr, cssProperty } of PROPERTY_DEFS) {
			out.push(emit.sub(full.toUpperCase()));
			for (const [key, value] of Object.entries(allValues)) {
				out.push(
					emit.rule({
						selectors: emit.classPair([full, abbr], key),
						property: cssProperty,
						value,
					})
				);
			}
		}

		return out.join("\n\n") + "\n";
	},
};
