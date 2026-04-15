// Box-related utilities — box-sizing, box-decoration-break.
import * as emit from "../emit.js";

const BOX_SIZING = ["border-box", "content-box"];
const BOX_DECORATION_BREAK = ["slice", "clone"];

export default {
	fileName: "core/box.css",
	generate(/* catalog */) {
		const out = [emit.header("BOX UTILITIES — box-sizing, box-decoration-break")];

		out.push(emit.sub("BOX-SIZING"));
		for (const v of BOX_SIZING) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["box-sizing", "bs"], v),
					property: "box-sizing",
					value: v,
				})
			);
		}

		out.push(emit.sub("BOX-DECORATION-BREAK"));
		for (const v of BOX_DECORATION_BREAK) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["box-decoration-break", "bdb"], v),
					property: "box-decoration-break",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
