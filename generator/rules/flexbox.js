// Flexbox utilities — direction, wrap, justify, align, flex-grow/shrink/basis, order.
import * as emit from "../emit.js";

const DIRECTION = ["row", "row-reverse", "column", "column-reverse"];
const WRAP = ["nowrap", "wrap", "wrap-reverse"];
const JUSTIFY_CONTENT = [
	"flex-start",
	"flex-end",
	"center",
	"space-between",
	"space-around",
	"space-evenly",
	"start",
	"end",
];
const ALIGN_ITEMS = ["flex-start", "flex-end", "center", "baseline", "stretch", "start", "end"];
const ALIGN_SELF = ["auto", ...ALIGN_ITEMS];
const ALIGN_CONTENT = [...JUSTIFY_CONTENT, "stretch"];
const FLEX_GROW = ["0", "1"];
const FLEX_SHRINK = ["0", "1"];

export default {
	fileName: "layout/flexbox.css",
	generate(/* catalog */) {
		const out = [emit.header("FLEXBOX UTILITIES")];

		out.push(emit.sub("FLEX-DIRECTION"));
		for (const v of DIRECTION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["flex-direction", "fd"], v),
					property: "flex-direction",
					value: v,
				})
			);
		}

		out.push(emit.sub("FLEX-WRAP"));
		for (const v of WRAP) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["flex-wrap", "fwrap"], v),
					property: "flex-wrap",
					value: v,
				})
			);
		}

		out.push(emit.sub("JUSTIFY-CONTENT"));
		for (const v of JUSTIFY_CONTENT) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["justify-content", "jc"], v),
					property: "justify-content",
					value: v,
				})
			);
		}

		out.push(emit.sub("ALIGN-ITEMS"));
		for (const v of ALIGN_ITEMS) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["align-items", "ai"], v),
					property: "align-items",
					value: v,
				})
			);
		}

		out.push(emit.sub("ALIGN-SELF"));
		for (const v of ALIGN_SELF) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["align-self", "as"], v),
					property: "align-self",
					value: v,
				})
			);
		}

		out.push(emit.sub("ALIGN-CONTENT"));
		for (const v of ALIGN_CONTENT) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["align-content", "ac"], v),
					property: "align-content",
					value: v,
				})
			);
		}

		out.push(emit.sub("FLEX-GROW / FLEX-SHRINK"));
		for (const v of FLEX_GROW) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["flex-grow", "fg"], v),
					property: "flex-grow",
					value: v,
				})
			);
		}
		for (const v of FLEX_SHRINK) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["flex-shrink", "fsh"], v),
					property: "flex-shrink",
					value: v,
				})
			);
		}

		// flex shorthand commonly-used presets
		out.push(emit.sub("FLEX (shorthand presets)"));
		const FLEX_PRESETS = {
			"1": "1 1 0%",
			auto: "1 1 auto",
			initial: "0 1 auto",
			none: "none",
		};
		for (const [key, value] of Object.entries(FLEX_PRESETS)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["flex", "fx"], key),
					property: "flex",
					value,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
