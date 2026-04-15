// Spacing utilities — margin, padding, gap.
// Per-property: directional variants (-top/right/bottom/left/x/y).
// Values: design-tokens space scale (0..14) + special (auto for margin, full/half/auto for size).
import * as emit from "../emit.js";

// Direction definitions: { suffix, abbrevSuffix, properties (array of CSS properties) }
const MARGIN_DIRECTIONS = [
	{ s: "", a: "", props: ["margin"] },
	{ s: "-top", a: "t", props: ["margin-top"] },
	{ s: "-right", a: "r", props: ["margin-right"] },
	{ s: "-bottom", a: "b", props: ["margin-bottom"] },
	{ s: "-left", a: "l", props: ["margin-left"] },
	{ s: "-x", a: "x", props: ["margin-left", "margin-right"] },
	{ s: "-y", a: "y", props: ["margin-top", "margin-bottom"] },
];

const PADDING_DIRECTIONS = [
	{ s: "", a: "", props: ["padding"] },
	{ s: "-top", a: "t", props: ["padding-top"] },
	{ s: "-right", a: "r", props: ["padding-right"] },
	{ s: "-bottom", a: "b", props: ["padding-bottom"] },
	{ s: "-left", a: "l", props: ["padding-left"] },
	{ s: "-x", a: "x", props: ["padding-left", "padding-right"] },
	{ s: "-y", a: "y", props: ["padding-top", "padding-bottom"] },
];

const GAP_DIRECTIONS = [
	{ s: "", a: "", props: ["gap"] },
	{ s: "-row", a: "r", props: ["row-gap"] },
	{ s: "-column", a: "c", props: ["column-gap"] },
];

// Generate property-direction × value matrix.
// fullName: e.g., 'margin'; abbrevName: 'm'.
function emitDirectional({ fullName, abbrevName, directions, valueMap }) {
	const out = [];
	for (const dir of directions) {
		// Class name pattern: .{fullName}{dir.s}:{key}, .{abbrevName}{dir.a}:{key}
		const fullCls = `${fullName}${dir.s}`;
		const abbrCls = `${abbrevName}${dir.a}`;
		for (const [key, tokenRef] of Object.entries(valueMap)) {
			out.push(
				emit.rule({
					selectors: emit.classPair([fullCls, abbrCls], key),
					declarations: dir.props.map((p) => ({ property: p, value: tokenRef })),
				})
			);
		}
	}
	return out;
}

export default {
	fileName: "core/spacing.css",
	generate(catalog) {
		const space = catalog.space; // { '0': 'var(--space-0)', ..., '14': 'var(--space-14)' }
		// Special values for margin: auto
		const marginValues = { ...space, auto: "auto" };
		// Padding doesn't accept auto (well, it does in some specs, but conventionally not used)
		const paddingValues = { ...space };
		// Gap also uses spacing scale; auto not meaningful
		const gapValues = { ...space };

		const out = [emit.header("SPACING UTILITIES — margin, padding, gap")];

		out.push(emit.sub("MARGIN"));
		out.push(
			...emitDirectional({
				fullName: "margin",
				abbrevName: "m",
				directions: MARGIN_DIRECTIONS,
				valueMap: marginValues,
			})
		);

		out.push(emit.sub("PADDING"));
		out.push(
			...emitDirectional({
				fullName: "padding",
				abbrevName: "p",
				directions: PADDING_DIRECTIONS,
				valueMap: paddingValues,
			})
		);

		out.push(emit.sub("GAP"));
		out.push(
			...emitDirectional({
				fullName: "gap",
				abbrevName: "g",
				directions: GAP_DIRECTIONS,
				valueMap: gapValues,
			})
		);

		return out.join("\n\n") + "\n";
	},
};
