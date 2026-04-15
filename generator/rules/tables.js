// Table utilities — table-layout, border-collapse, border-spacing, caption-side, empty-cells.
import * as emit from "../emit.js";

const TABLE_LAYOUT = ["auto", "fixed"];
const BORDER_COLLAPSE = ["collapse", "separate"];
const CAPTION_SIDE = ["top", "bottom"];
const EMPTY_CELLS = ["show", "hide"];

export default {
	fileName: "core/tables.css",
	generate(catalog) {
		const space = catalog.space;
		const out = [emit.header("TABLE UTILITIES")];

		out.push(emit.sub("TABLE-LAYOUT"));
		for (const v of TABLE_LAYOUT) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["table-layout", "tl"], v),
					property: "table-layout",
					value: v,
				})
			);
		}

		out.push(emit.sub("BORDER-COLLAPSE"));
		for (const v of BORDER_COLLAPSE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["border-collapse", "bdc"], v),
					property: "border-collapse",
					value: v,
				})
			);
		}

		out.push(emit.sub("BORDER-SPACING"));
		for (const [key, value] of Object.entries(space)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["border-spacing", "bdsp"], key),
					property: "border-spacing",
					value,
				})
			);
		}

		out.push(emit.sub("CAPTION-SIDE"));
		for (const v of CAPTION_SIDE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["caption-side", "cs"], v),
					property: "caption-side",
					value: v,
				})
			);
		}

		out.push(emit.sub("EMPTY-CELLS"));
		for (const v of EMPTY_CELLS) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["empty-cells", "ec"], v),
					property: "empty-cells",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
