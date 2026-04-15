// Legacy layout utilities — float, clear (pre-flex/grid era; included for compat).
import * as emit from "../emit.js";

const FLOAT = ["none", "left", "right", "inline-start", "inline-end"];
const CLEAR = ["none", "left", "right", "both", "inline-start", "inline-end"];

export default {
	fileName: "core/legacy.css",
	generate(/* catalog */) {
		const out = [emit.header("LEGACY LAYOUT — float, clear")];

		out.push(emit.sub("FLOAT"));
		for (const v of FLOAT) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["float", "fl"], v),
					property: "float",
					value: v,
				})
			);
		}

		out.push(emit.sub("CLEAR"));
		for (const v of CLEAR) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["clear", "cl"], v),
					property: "clear",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
