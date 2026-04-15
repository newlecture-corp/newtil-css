// Composite utilities — commonly-used combinations of multiple properties.
// These are unary classes (no value suffix) except line-clamp which takes N.
import * as emit from "../emit.js";

export default {
	fileName: "core/composite.css",
	generate(/* catalog */) {
		const out = [emit.header("COMPOSITE UTILITIES — property combinations")];

		// ===== TRUNCATE — single-line text with ellipsis =====
		out.push(emit.sub("TRUNCATE"));
		out.push(
			emit.rule({
				selectors: emit.classPair(["truncate"], ""),
				declarations: [
					{ property: "overflow", value: "hidden" },
					{ property: "text-overflow", value: "ellipsis" },
					{ property: "white-space", value: "nowrap" },
				],
			})
		);

		// ===== LINE-CLAMP — multi-line text truncation =====
		out.push(emit.sub("LINE-CLAMP"));
		for (const n of [1, 2, 3, 4, 5, 6]) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["line-clamp", "lc"], String(n)),
					declarations: [
						{ property: "display", value: "-webkit-box" },
						{ property: "-webkit-box-orient", value: "vertical" },
						{ property: "-webkit-line-clamp", value: String(n) },
						{ property: "overflow", value: "hidden" },
					],
				})
			);
		}
		// line-clamp:none — reset
		out.push(
			emit.rule({
				selectors: emit.classPair(["line-clamp", "lc"], "none"),
				declarations: [
					{ property: "display", value: "block" },
					{ property: "-webkit-line-clamp", value: "unset" },
					{ property: "-webkit-box-orient", value: "unset" },
					{ property: "overflow", value: "visible" },
				],
			})
		);

		// ===== SR-ONLY — visually hidden but accessible to assistive tech =====
		out.push(emit.sub("SR-ONLY / NOT-SR-ONLY"));
		out.push(
			emit.rule({
				selectors: emit.classPair(["sr-only"], ""),
				declarations: [
					{ property: "position", value: "absolute" },
					{ property: "width", value: "1px" },
					{ property: "height", value: "1px" },
					{ property: "padding", value: "0" },
					{ property: "margin", value: "-1px" },
					{ property: "overflow", value: "hidden" },
					{ property: "clip", value: "rect(0, 0, 0, 0)" },
					{ property: "white-space", value: "nowrap" },
					{ property: "border-width", value: "0" },
				],
			})
		);
		// not-sr-only — undo sr-only (useful for :focus to show)
		out.push(
			emit.rule({
				selectors: emit.classPair(["not-sr-only"], ""),
				declarations: [
					{ property: "position", value: "static" },
					{ property: "width", value: "auto" },
					{ property: "height", value: "auto" },
					{ property: "padding", value: "0" },
					{ property: "margin", value: "0" },
					{ property: "overflow", value: "visible" },
					{ property: "clip", value: "auto" },
					{ property: "white-space", value: "normal" },
				],
			})
		);

		// ===== CENTER — flex center shortcut =====
		out.push(emit.sub("CENTER — flex center"));
		out.push(
			emit.rule({
				selectors: emit.classPair(["center"], ""),
				declarations: [
					{ property: "display", value: "flex" },
					{ property: "justify-content", value: "center" },
					{ property: "align-items", value: "center" },
				],
			})
		);
		// center-col — same but column direction
		out.push(
			emit.rule({
				selectors: emit.classPair(["center-col"], ""),
				declarations: [
					{ property: "display", value: "flex" },
					{ property: "flex-direction", value: "column" },
					{ property: "justify-content", value: "center" },
					{ property: "align-items", value: "center" },
				],
			})
		);

		// ===== FIXED-CENTER — absolute centered via transform =====
		out.push(emit.sub("FIXED-CENTER — absolute centered"));
		out.push(
			emit.rule({
				selectors: emit.classPair(["fixed-center"], ""),
				declarations: [
					{ property: "position", value: "absolute" },
					{ property: "top", value: "50%" },
					{ property: "left", value: "50%" },
					{ property: "translate", value: "-50% -50%" },
				],
			})
		);

		// ===== CLEARFIX — clears floats inside =====
		out.push(emit.sub("CLEARFIX"));
		out.push(
			emit.rule({
				selectors: [".clearfix::after"],
				declarations: [
					{ property: "content", value: '""' },
					{ property: "display", value: "table" },
					{ property: "clear", value: "both" },
				],
			})
		);

		// ===== STACK — vertical flex with gap (takes space N) =====
		out.push(emit.sub("STACK — vertical flex with gap N"));
		for (const n of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["stack"], String(n)),
					declarations: [
						{ property: "display", value: "flex" },
						{ property: "flex-direction", value: "column" },
						{ property: "gap", value: `var(--space-${n})` },
					],
				})
			);
		}

		// ===== HSTACK — horizontal flex with gap (takes space N) =====
		out.push(emit.sub("HSTACK — horizontal flex with gap N"));
		for (const n of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["hstack"], String(n)),
					declarations: [
						{ property: "display", value: "flex" },
						{ property: "flex-direction", value: "row" },
						{ property: "align-items", value: "center" },
						{ property: "gap", value: `var(--space-${n})` },
					],
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
