// Position utilities — position keyword + top/right/bottom/left + z-index.
import * as emit from "../emit.js";

const POSITION_VALUES = ["static", "relative", "absolute", "fixed", "sticky"];

const INSET_PROPS = [
	{ full: "top", abbr: "top", cssProperty: "top" },
	{ full: "right", abbr: "right", cssProperty: "right" },
	{ full: "bottom", abbr: "bottom", cssProperty: "bottom" },
	{ full: "left", abbr: "left", cssProperty: "left" },
];

// Inset accepts spacing scale + auto + 0
const INSET_SPECIAL = { auto: "auto" };

export default {
	fileName: "core/position.css",
	generate(catalog) {
		const space = catalog.space;
		const z = catalog.z;
		const insetValues = { ...space, ...INSET_SPECIAL };

		const out = [emit.header("POSITION UTILITIES")];

		// position keyword
		out.push(emit.sub("POSITION"));
		for (const v of POSITION_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["position", "pos"], v),
					property: "position",
					value: v,
				})
			);
		}

		// inset (top/right/bottom/left)
		for (const { full, cssProperty } of INSET_PROPS) {
			out.push(emit.sub(full.toUpperCase()));
			for (const [key, value] of Object.entries(insetValues)) {
				out.push(
					emit.rule({
						selectors: emit.classPair([full], key),
						property: cssProperty,
						value,
					})
				);
			}
		}

		// z-index
		out.push(emit.sub("Z-INDEX"));
		for (const [key, value] of Object.entries(z)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["z-index", "z"], key),
					property: "z-index",
					value,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
