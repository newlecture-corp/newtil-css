// Multi-column layout utilities — column-count, column-gap, column-rule, break-* properties.
import * as emit from "../emit.js";

const COLUMN_COUNT = ["1", "2", "3", "4", "5", "6", "auto"];
const BREAK_INSIDE = ["auto", "avoid", "avoid-page", "avoid-column"];
const BREAK_BEFORE = ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
const BREAK_AFTER = BREAK_BEFORE;

export default {
	fileName: "core/columns.css",
	generate(catalog) {
		const space = catalog.space;
		const out = [emit.header("COLUMNS UTILITIES — multi-column + break")];

		// column-count
		out.push(emit.sub("COLUMN-COUNT"));
		for (const v of COLUMN_COUNT) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["column-count", "cc"], v),
					property: "column-count",
					value: v,
				})
			);
		}

		// column-gap
		out.push(emit.sub("COLUMN-GAP"));
		for (const [key, value] of Object.entries(space)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["column-gap-len", "cgl"], key),
					property: "column-gap",
					value,
				})
			);
		}

		// break-inside / before / after
		out.push(emit.sub("BREAK-INSIDE"));
		for (const v of BREAK_INSIDE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["break-inside", "bri"], v),
					property: "break-inside",
					value: v,
				})
			);
		}

		out.push(emit.sub("BREAK-BEFORE"));
		for (const v of BREAK_BEFORE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["break-before", "brb"], v),
					property: "break-before",
					value: v,
				})
			);
		}

		out.push(emit.sub("BREAK-AFTER"));
		for (const v of BREAK_AFTER) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["break-after", "bra"], v),
					property: "break-after",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
