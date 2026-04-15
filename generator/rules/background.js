// Background utilities — image (gradients), position, size, repeat, attachment, clip, origin.
// Note: background-color is in colors.css (along with color and border-color).
import * as emit from "../emit.js";

const POSITION_VALUES = [
	"center",
	"top",
	"top-right",
	"right",
	"bottom-right",
	"bottom",
	"bottom-left",
	"left",
	"top-left",
];

const SIZE_VALUES = {
	auto: "auto",
	cover: "cover",
	contain: "contain",
};

const REPEAT_VALUES = {
	repeat: "repeat",
	"no-repeat": "no-repeat",
	"repeat-x": "repeat-x",
	"repeat-y": "repeat-y",
	round: "round",
	space: "space",
};

const ATTACHMENT_VALUES = ["fixed", "local", "scroll"];

const CLIP_VALUES = ["border-box", "padding-box", "content-box", "text"];

const ORIGIN_VALUES = ["border-box", "padding-box", "content-box"];

// Gradient direction presets (using `to <side>` syntax)
const GRADIENT_DIRECTIONS = {
	"to-t": "to top",
	"to-tr": "to top right",
	"to-r": "to right",
	"to-br": "to bottom right",
	"to-b": "to bottom",
	"to-bl": "to bottom left",
	"to-l": "to left",
	"to-tl": "to top left",
};

function positionValue(v) {
	return v.replace(/-/g, " ");
}

export default {
	fileName: "core/background.css",
	generate(catalog) {
		const out = [emit.header("BACKGROUND UTILITIES (image / position / size / repeat / attachment / clip / origin)")];

		// background-image: linear-gradient with direction (uses --color-primary as default; user overrides via inline style or variants)
		out.push(emit.sub("BACKGROUND-IMAGE — linear gradient with direction (uses --color-primary)"));
		out.push(
			emit.rule({
				selectors: emit.classPair(["background-image", "bgi"], "none"),
				property: "background-image",
				value: "none",
			})
		);
		for (const [key, dir] of Object.entries(GRADIENT_DIRECTIONS)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-image", "bgi"], `linear-${key}`),
					property: "background-image",
					value: `linear-gradient(${dir}, var(--color-primary), transparent)`,
				})
			);
		}

		// background-position
		out.push(emit.sub("BACKGROUND-POSITION"));
		for (const v of POSITION_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-position", "bgp"], v),
					property: "background-position",
					value: positionValue(v),
				})
			);
		}

		// background-size
		out.push(emit.sub("BACKGROUND-SIZE"));
		for (const [key, val] of Object.entries(SIZE_VALUES)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-size", "bgs"], key),
					property: "background-size",
					value: val,
				})
			);
		}

		// background-repeat
		out.push(emit.sub("BACKGROUND-REPEAT"));
		for (const [key, val] of Object.entries(REPEAT_VALUES)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-repeat", "bgr"], key),
					property: "background-repeat",
					value: val,
				})
			);
		}

		// background-attachment
		out.push(emit.sub("BACKGROUND-ATTACHMENT"));
		for (const v of ATTACHMENT_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-attachment", "bga"], v),
					property: "background-attachment",
					value: v,
				})
			);
		}

		// background-clip
		out.push(emit.sub("BACKGROUND-CLIP"));
		for (const v of CLIP_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-clip", "bgc"], v),
					property: "background-clip",
					value: v,
				})
			);
		}

		// background-origin
		out.push(emit.sub("BACKGROUND-ORIGIN"));
		for (const v of ORIGIN_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["background-origin", "bgo"], v),
					property: "background-origin",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
