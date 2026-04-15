// Text extras — properties not in core typography.js: shadow, indent, overflow,
// vertical-align, word-spacing, text-wrap, hyphens, direction.
import * as emit from "../emit.js";

const TEXT_OVERFLOW = ["clip", "ellipsis"];
const VERTICAL_ALIGN = [
	"baseline",
	"top",
	"middle",
	"bottom",
	"text-top",
	"text-bottom",
	"sub",
	"super",
];
const TEXT_WRAP = ["wrap", "nowrap", "balance", "pretty"];
const HYPHENS = ["none", "manual", "auto"];
const DIRECTION = ["ltr", "rtl"];

const TEXT_SHADOW_PRESETS = {
	none: "none",
	sm: "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15)",
	md: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.2)",
	lg: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
	xl: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)",
};

export default {
	fileName: "core/text-extras.css",
	generate(catalog) {
		const space = catalog.space;
		const out = [emit.header("TEXT EXTRAS — shadow, indent, overflow, vertical-align, word-spacing, wrap, hyphens, direction")];

		// text-shadow
		out.push(emit.sub("TEXT-SHADOW"));
		for (const [key, value] of Object.entries(TEXT_SHADOW_PRESETS)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["text-shadow", "tsh"], key),
					property: "text-shadow",
					value,
				})
			);
		}

		// text-indent
		out.push(emit.sub("TEXT-INDENT"));
		for (const [key, value] of Object.entries(space)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["text-indent", "ti"], key),
					property: "text-indent",
					value,
				})
			);
		}

		// text-overflow
		out.push(emit.sub("TEXT-OVERFLOW"));
		for (const v of TEXT_OVERFLOW) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["text-overflow", "to"], v),
					property: "text-overflow",
					value: v,
				})
			);
		}

		// vertical-align
		out.push(emit.sub("VERTICAL-ALIGN"));
		for (const v of VERTICAL_ALIGN) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["vertical-align", "va"], v),
					property: "vertical-align",
					value: v,
				})
			);
		}

		// word-spacing (uses spacing scale)
		out.push(emit.sub("WORD-SPACING"));
		for (const [key, value] of Object.entries(space)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["word-spacing", "wsp"], key),
					property: "word-spacing",
					value,
				})
			);
		}

		// text-wrap (modern: balance / pretty for headings)
		out.push(emit.sub("TEXT-WRAP"));
		for (const v of TEXT_WRAP) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["text-wrap", "tw"], v),
					property: "text-wrap",
					value: v,
				})
			);
		}

		// hyphens
		out.push(emit.sub("HYPHENS"));
		for (const v of HYPHENS) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["hyphens", "hy"], v),
					property: "hyphens",
					value: v,
				})
			);
		}

		// direction
		out.push(emit.sub("DIRECTION"));
		for (const v of DIRECTION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["direction", "dir"], v),
					property: "direction",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
