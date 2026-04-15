// Border utilities — border-width (per side + shorthand), border-style, border-radius.
// Note: border-color is in colors.css.
import * as emit from "../emit.js";

const BORDER_WIDTH_DIRECTIONS = [
	{ s: "", a: "", props: ["border-width"] },
	{ s: "-top", a: "t", props: ["border-top-width"] },
	{ s: "-right", a: "r", props: ["border-right-width"] },
	{ s: "-bottom", a: "b", props: ["border-bottom-width"] },
	{ s: "-left", a: "l", props: ["border-left-width"] },
	{ s: "-x", a: "x", props: ["border-left-width", "border-right-width"] },
	{ s: "-y", a: "y", props: ["border-top-width", "border-bottom-width"] },
];

const BORDER_STYLE_VALUES = [
	"none",
	"solid",
	"dashed",
	"dotted",
	"double",
	"hidden",
];

const RADIUS_DIRECTIONS = [
	{ s: "", a: "", props: ["border-radius"] },
	{ s: "-top-left", a: "tl", props: ["border-top-left-radius"] },
	{ s: "-top-right", a: "tr", props: ["border-top-right-radius"] },
	{ s: "-bottom-left", a: "bl", props: ["border-bottom-left-radius"] },
	{ s: "-bottom-right", a: "br", props: ["border-bottom-right-radius"] },
	{ s: "-top", a: "t", props: ["border-top-left-radius", "border-top-right-radius"] },
	{ s: "-right", a: "r", props: ["border-top-right-radius", "border-bottom-right-radius"] },
	{ s: "-bottom", a: "b", props: ["border-bottom-left-radius", "border-bottom-right-radius"] },
	{ s: "-left", a: "l", props: ["border-top-left-radius", "border-bottom-left-radius"] },
];

export default {
	fileName: "core/borders.css",
	generate(catalog) {
		const widths = catalog["border-width"];
		const radii = catalog.radius;

		const out = [emit.header("BORDER UTILITIES — width, style, radius")];

		// border-width
		out.push(emit.sub("BORDER-WIDTH (per-side + axis shortcuts)"));
		for (const dir of BORDER_WIDTH_DIRECTIONS) {
			const fullCls = `border-width${dir.s}`;
			const abbrCls = `bdw${dir.a}`;
			for (const [key, tokenRef] of Object.entries(widths)) {
				out.push(
					emit.rule({
						selectors: emit.classPair([fullCls, abbrCls], key),
						declarations: dir.props.map((p) => ({
							property: p,
							value: tokenRef,
						})),
					})
				);
			}
		}

		// border-style
		out.push(emit.sub("BORDER-STYLE"));
		for (const v of BORDER_STYLE_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["border-style", "bds"], v),
					property: "border-style",
					value: v,
				})
			);
		}

		// border-radius (per-corner + per-side + shorthand)
		out.push(emit.sub("BORDER-RADIUS"));
		for (const dir of RADIUS_DIRECTIONS) {
			const fullCls = `border-radius${dir.s}`;
			const abbrCls = `bdr${dir.a}`;
			for (const [key, tokenRef] of Object.entries(radii)) {
				out.push(
					emit.rule({
						selectors: emit.classPair([fullCls, abbrCls], key),
						declarations: dir.props.map((p) => ({
							property: p,
							value: tokenRef,
						})),
					})
				);
			}
		}

		return out.join("\n\n") + "\n";
	},
};
