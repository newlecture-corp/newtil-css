// List utilities — list-style-type, list-style-position.
import * as emit from "../emit.js";

const LIST_STYLE_TYPE = [
	"none",
	"disc",
	"circle",
	"square",
	"decimal",
	"decimal-leading-zero",
	"lower-roman",
	"upper-roman",
	"lower-alpha",
	"upper-alpha",
	"lower-greek",
];
const LIST_STYLE_POSITION = ["inside", "outside"];

export default {
	fileName: "core/lists.css",
	generate(/* catalog */) {
		const out = [emit.header("LIST UTILITIES")];

		out.push(emit.sub("LIST-STYLE-TYPE"));
		for (const v of LIST_STYLE_TYPE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["list-style-type", "lst"], v),
					property: "list-style-type",
					value: v,
				})
			);
		}

		out.push(emit.sub("LIST-STYLE-POSITION"));
		for (const v of LIST_STYLE_POSITION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["list-style-position", "lsp"], v),
					property: "list-style-position",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
