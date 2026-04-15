// Scroll utilities — scroll-snap, scroll-behavior, scroll-margin, scroll-padding.
import * as emit from "../emit.js";

const SCROLL_SNAP_TYPE = [
	"none",
	"x",
	"y",
	"both",
	"x-mandatory",
	"y-mandatory",
	"both-mandatory",
];
const SCROLL_SNAP_ALIGN = ["none", "start", "end", "center"];
const SCROLL_SNAP_STOP = ["normal", "always"];
const SCROLL_BEHAVIOR = ["auto", "smooth"];

const SCROLL_MARGIN_DIRECTIONS = [
	{ s: "", a: "", props: ["scroll-margin"] },
	{ s: "-top", a: "t", props: ["scroll-margin-top"] },
	{ s: "-right", a: "r", props: ["scroll-margin-right"] },
	{ s: "-bottom", a: "b", props: ["scroll-margin-bottom"] },
	{ s: "-left", a: "l", props: ["scroll-margin-left"] },
	{ s: "-x", a: "x", props: ["scroll-margin-left", "scroll-margin-right"] },
	{ s: "-y", a: "y", props: ["scroll-margin-top", "scroll-margin-bottom"] },
];

const SCROLL_PADDING_DIRECTIONS = [
	{ s: "", a: "", props: ["scroll-padding"] },
	{ s: "-top", a: "t", props: ["scroll-padding-top"] },
	{ s: "-right", a: "r", props: ["scroll-padding-right"] },
	{ s: "-bottom", a: "b", props: ["scroll-padding-bottom"] },
	{ s: "-left", a: "l", props: ["scroll-padding-left"] },
	{ s: "-x", a: "x", props: ["scroll-padding-left", "scroll-padding-right"] },
	{ s: "-y", a: "y", props: ["scroll-padding-top", "scroll-padding-bottom"] },
];

function snapTypeValue(v) {
	if (v === "none") return "none";
	const parts = v.split("-");
	const axis = parts[0];
	const strictness = parts[1] || "proximity";
	return `${axis} ${strictness}`;
}

export default {
	fileName: "core/scroll.css",
	generate(catalog) {
		const space = catalog.space;
		const out = [emit.header("SCROLL UTILITIES — snap, behavior, margin, padding")];

		// scroll-snap-type
		out.push(emit.sub("SCROLL-SNAP-TYPE"));
		for (const v of SCROLL_SNAP_TYPE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["scroll-snap-type", "sst"], v),
					property: "scroll-snap-type",
					value: snapTypeValue(v),
				})
			);
		}

		// scroll-snap-align
		out.push(emit.sub("SCROLL-SNAP-ALIGN"));
		for (const v of SCROLL_SNAP_ALIGN) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["scroll-snap-align", "ssa"], v),
					property: "scroll-snap-align",
					value: v,
				})
			);
		}

		// scroll-snap-stop
		out.push(emit.sub("SCROLL-SNAP-STOP"));
		for (const v of SCROLL_SNAP_STOP) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["scroll-snap-stop", "sss"], v),
					property: "scroll-snap-stop",
					value: v,
				})
			);
		}

		// scroll-behavior
		out.push(emit.sub("SCROLL-BEHAVIOR"));
		for (const v of SCROLL_BEHAVIOR) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["scroll-behavior", "sb"], v),
					property: "scroll-behavior",
					value: v,
				})
			);
		}

		// scroll-margin (+ directional)
		out.push(emit.sub("SCROLL-MARGIN"));
		for (const dir of SCROLL_MARGIN_DIRECTIONS) {
			const fullCls = `scroll-margin${dir.s}`;
			const abbrCls = `sm${dir.a}`;
			for (const [key, value] of Object.entries(space)) {
				out.push(
					emit.rule({
						selectors: emit.classPair([fullCls, abbrCls], key),
						declarations: dir.props.map((p) => ({ property: p, value })),
					})
				);
			}
		}

		// scroll-padding (+ directional)
		out.push(emit.sub("SCROLL-PADDING"));
		for (const dir of SCROLL_PADDING_DIRECTIONS) {
			const fullCls = `scroll-padding${dir.s}`;
			const abbrCls = `sp${dir.a}`;
			for (const [key, value] of Object.entries(space)) {
				out.push(
					emit.rule({
						selectors: emit.classPair([fullCls, abbrCls], key),
						declarations: dir.props.map((p) => ({ property: p, value })),
					})
				);
			}
		}

		return out.join("\n\n") + "\n";
	},
};
