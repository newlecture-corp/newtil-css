// Logical property utilities — inline-start/end, block-start/end variants for
// margin, padding, border-width (alternative to physical left/right/top/bottom).
// Useful for RTL/LTR-agnostic layouts.
import * as emit from "../emit.js";

const MARGIN_LOGICAL = [
	{ s: "-block", a: "bk", props: ["margin-block"] },
	{ s: "-block-start", a: "bks", props: ["margin-block-start"] },
	{ s: "-block-end", a: "bke", props: ["margin-block-end"] },
	{ s: "-inline", a: "in", props: ["margin-inline"] },
	{ s: "-inline-start", a: "ins", props: ["margin-inline-start"] },
	{ s: "-inline-end", a: "ine", props: ["margin-inline-end"] },
];

const PADDING_LOGICAL = [
	{ s: "-block", a: "bk", props: ["padding-block"] },
	{ s: "-block-start", a: "bks", props: ["padding-block-start"] },
	{ s: "-block-end", a: "bke", props: ["padding-block-end"] },
	{ s: "-inline", a: "in", props: ["padding-inline"] },
	{ s: "-inline-start", a: "ins", props: ["padding-inline-start"] },
	{ s: "-inline-end", a: "ine", props: ["padding-inline-end"] },
];

const BORDER_WIDTH_LOGICAL = [
	{ s: "-block", a: "bk", props: ["border-block-width"] },
	{ s: "-block-start", a: "bks", props: ["border-block-start-width"] },
	{ s: "-block-end", a: "bke", props: ["border-block-end-width"] },
	{ s: "-inline", a: "in", props: ["border-inline-width"] },
	{ s: "-inline-start", a: "ins", props: ["border-inline-start-width"] },
	{ s: "-inline-end", a: "ine", props: ["border-inline-end-width"] },
];

const INSET_LOGICAL = [
	{ s: "inset-block", a: "ibk", props: ["inset-block"] },
	{ s: "inset-block-start", a: "ibks", props: ["inset-block-start"] },
	{ s: "inset-block-end", a: "ibke", props: ["inset-block-end"] },
	{ s: "inset-inline", a: "iin", props: ["inset-inline"] },
	{ s: "inset-inline-start", a: "iins", props: ["inset-inline-start"] },
	{ s: "inset-inline-end", a: "iine", props: ["inset-inline-end"] },
];

function emitDirectional({ fullName, abbrName, dirs, valueMap, includeAuto = false }) {
	const out = [];
	const values = includeAuto ? { ...valueMap, auto: "auto" } : valueMap;
	for (const dir of dirs) {
		const fullCls = `${fullName}${dir.s}`;
		const abbrCls = `${abbrName}${dir.a}`;
		for (const [key, val] of Object.entries(values)) {
			out.push(
				emit.rule({
					selectors: emit.classPair([fullCls, abbrCls], key),
					declarations: dir.props.map((p) => ({ property: p, value: val })),
				})
			);
		}
	}
	return out;
}

export default {
	fileName: "core/logical.css",
	generate(catalog) {
		const space = catalog.space;
		const widths = catalog["border-width"];
		const out = [emit.header("LOGICAL PROPERTIES — block/inline variants for margin, padding, border-width, inset")];

		out.push(emit.sub("MARGIN (logical)"));
		out.push(...emitDirectional({ fullName: "margin", abbrName: "m", dirs: MARGIN_LOGICAL, valueMap: space, includeAuto: true }));

		out.push(emit.sub("PADDING (logical)"));
		out.push(...emitDirectional({ fullName: "padding", abbrName: "p", dirs: PADDING_LOGICAL, valueMap: space }));

		out.push(emit.sub("BORDER-WIDTH (logical)"));
		out.push(...emitDirectional({ fullName: "border-width", abbrName: "bdw", dirs: BORDER_WIDTH_LOGICAL, valueMap: widths }));

		// inset is positional, classPair(['inset-block'], key) -> .inset-block:N
		// (no second name as plain inset-block-* uses descriptive names without abbrev pair)
		out.push(emit.sub("INSET (logical) — top/right/bottom/left equivalents"));
		const insetValues = { ...space, auto: "auto" };
		for (const dir of INSET_LOGICAL) {
			for (const [key, val] of Object.entries(insetValues)) {
				out.push(
					emit.rule({
						selectors: emit.classPair([dir.s, dir.a], key),
						declarations: dir.props.map((p) => ({ property: p, value: val })),
					})
				);
			}
		}

		return out.join("\n\n") + "\n";
	},
};
