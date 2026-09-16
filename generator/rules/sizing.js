// Sizing utilities — width, height, min/max-width, min/max-height.
// Values: catalog.size = space 스케일(--space-N) + SIZE_LITERALS(분수·뷰포트·키워드; catalog.js). 0.2.1: --size-* 토큰 없음.
import * as emit from "../emit.js";

const PROPERTY_DEFS = [
	{ full: "width", abbr: "w", cssProperty: "width" },
	{ full: "height", abbr: "h", cssProperty: "height" },
	{ full: "min-width", abbr: "min-w", cssProperty: "min-width" },
	{ full: "min-height", abbr: "min-h", cssProperty: "min-height" },
	{ full: "max-width", abbr: "max-w", cssProperty: "max-width" },
	{ full: "max-height", abbr: "max-h", cssProperty: "max-height" },
];

// Special values that aren't size tokens
const SPECIAL_VALUES = {
	none: "none",
	"min-content": "min-content",
	"max-content": "max-content",
	"fit-content": "fit-content",
};

export default {
	fileName: "core/sizing.css",
	generate(catalog) {
		const sizes = catalog.size;
		const allValues = { ...sizes, ...SPECIAL_VALUES };

		const out = [emit.header("SIZING UTILITIES — width, height, min/max")];

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
