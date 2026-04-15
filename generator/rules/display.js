// Display utilities — fixed value list, no token mapping.
import * as emit from "../emit.js";

const VALUES = [
	"none",
	"block",
	"inline",
	"inline-block",
	"flex",
	"inline-flex",
	"grid",
	"inline-grid",
	"flow-root",
	"contents",
	"list-item",
	"table",
	"table-row",
	"table-cell",
];

export default {
	fileName: "core/display.css",
	generate(/* catalog */) {
		const out = [emit.header("DISPLAY UTILITIES")];
		for (const v of VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["display", "d"], v),
					property: "display",
					value: v,
				})
			);
		}
		return out.join("\n\n") + "\n";
	},
};
