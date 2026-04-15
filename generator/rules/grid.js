// Grid utilities — template-columns, template-rows, column-start/end, row-start/end.
import * as emit from "../emit.js";

// Generate `repeat(N, minmax(0, 1fr))` for N=1..12, plus 'none'
function colsValue(n) {
	if (n === "none") return "none";
	return `repeat(${n}, minmax(0, 1fr))`;
}

const GRID_COLS_RANGE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default {
	fileName: "layout/grid.css",
	generate(/* catalog */) {
		const out = [emit.header("GRID UTILITIES")];

		// grid-template-columns
		out.push(emit.sub("GRID-TEMPLATE-COLUMNS"));
		for (const n of GRID_COLS_RANGE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["grid-template-columns", "gtc"], String(n)),
					property: "grid-template-columns",
					value: colsValue(n),
				})
			);
		}
		out.push(
			emit.rule({
				selectors: emit.classPair(["grid-template-columns", "gtc"], "none"),
				property: "grid-template-columns",
				value: "none",
			})
		);

		// grid-template-rows
		out.push(emit.sub("GRID-TEMPLATE-ROWS"));
		for (const n of GRID_COLS_RANGE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["grid-template-rows", "gtr"], String(n)),
					property: "grid-template-rows",
					value: `repeat(${n}, minmax(0, 1fr))`,
				})
			);
		}
		out.push(
			emit.rule({
				selectors: emit.classPair(["grid-template-rows", "gtr"], "none"),
				property: "grid-template-rows",
				value: "none",
			})
		);

		// grid-column / grid-row span
		out.push(emit.sub("GRID-COLUMN / GRID-ROW (span)"));
		for (const n of GRID_COLS_RANGE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["grid-column", "gcs"], `span-${n}`),
					property: "grid-column",
					value: `span ${n} / span ${n}`,
				})
			);
			out.push(
				emit.rule({
					selectors: emit.classPair(["grid-row", "grs"], `span-${n}`),
					property: "grid-row",
					value: `span ${n} / span ${n}`,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
