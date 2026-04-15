// Typography utilities — font-size/weight/style, line-height, letter-spacing,
// text-align, text-decoration, text-transform, font-style.
import * as emit from "../emit.js";

const TEXT_ALIGN = ["left", "right", "center", "justify", "start", "end"];
const TEXT_DECORATION = ["none", "underline", "overline", "line-through"];
const TEXT_TRANSFORM = ["none", "uppercase", "lowercase", "capitalize"];
const FONT_STYLE = ["normal", "italic", "oblique"];
const WHITE_SPACE = ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"];
const WORD_BREAK = ["normal", "break-all", "keep-all"];
const OVERFLOW_WRAP = ["normal", "break-word", "anywhere"];

export default {
	fileName: "core/typography.css",
	generate(catalog) {
		const out = [emit.header("TYPOGRAPHY UTILITIES")];

		// font-size — uses all 16 font-size tokens (role + scale aliases)
		out.push(emit.sub("FONT-SIZE"));
		for (const [key, value] of Object.entries(catalog["font-size"])) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["font-size", "fs"], key),
					property: "font-size",
					value,
				})
			);
		}

		// font-weight
		out.push(emit.sub("FONT-WEIGHT"));
		for (const [key, value] of Object.entries(catalog["font-weight"])) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["font-weight", "fw"], key),
					property: "font-weight",
					value,
				})
			);
		}

		// line-height
		out.push(emit.sub("LINE-HEIGHT"));
		for (const [key, value] of Object.entries(catalog["line-height"])) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["line-height", "lh"], key),
					property: "line-height",
					value,
				})
			);
		}

		// letter-spacing
		out.push(emit.sub("LETTER-SPACING"));
		for (const [key, value] of Object.entries(catalog["letter-spacing"])) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["letter-spacing", "ls"], key),
					property: "letter-spacing",
					value,
				})
			);
		}

		// text-align
		out.push(emit.sub("TEXT-ALIGN"));
		for (const v of TEXT_ALIGN) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["text-align", "ta"], v),
					property: "text-align",
					value: v,
				})
			);
		}

		// text-decoration
		out.push(emit.sub("TEXT-DECORATION"));
		for (const v of TEXT_DECORATION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["text-decoration", "td"], v),
					property: "text-decoration",
					value: v,
				})
			);
		}

		// text-transform
		out.push(emit.sub("TEXT-TRANSFORM"));
		for (const v of TEXT_TRANSFORM) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["text-transform", "tt"], v),
					property: "text-transform",
					value: v,
				})
			);
		}

		// font-style
		out.push(emit.sub("FONT-STYLE"));
		for (const v of FONT_STYLE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["font-style", "fst"], v),
					property: "font-style",
					value: v,
				})
			);
		}

		// white-space
		out.push(emit.sub("WHITE-SPACE"));
		for (const v of WHITE_SPACE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["white-space", "ws"], v),
					property: "white-space",
					value: v,
				})
			);
		}

		// word-break
		out.push(emit.sub("WORD-BREAK"));
		for (const v of WORD_BREAK) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["word-break", "wb"], v),
					property: "word-break",
					value: v,
				})
			);
		}

		// overflow-wrap
		out.push(emit.sub("OVERFLOW-WRAP"));
		for (const v of OVERFLOW_WRAP) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["overflow-wrap", "ow"], v),
					property: "overflow-wrap",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
