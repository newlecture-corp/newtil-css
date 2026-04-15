// Transition utilities — full set: shorthand presets, property selectors,
// duration, timing-function, delay.
// (transition-duration & transition-timing-function previously in effects.js
//  are removed there to avoid duplicate selectors.)
import * as emit from "../emit.js";

const TRANSITION_PROPERTY_PRESETS = {
	none: "none",
	all: "all",
	default:
		"color, background-color, border-color, outline-color, fill, stroke, opacity, box-shadow, transform, translate, rotate, scale, filter, backdrop-filter",
	colors: "color, background-color, border-color, outline-color, fill, stroke",
	opacity: "opacity",
	shadow: "box-shadow",
	transform: "transform, translate, rotate, scale",
};

const DELAY_VALUES = {
	"0": "0ms",
	"75": "75ms",
	"100": "100ms",
	"150": "150ms",
	"200": "200ms",
	"300": "300ms",
	"500": "500ms",
	"700": "700ms",
	"1000": "1000ms",
};

export default {
	fileName: "core/transition.css",
	generate(catalog) {
		const out = [emit.header("TRANSITION UTILITIES")];

		// transition-property
		out.push(emit.sub("TRANSITION-PROPERTY"));
		for (const [key, value] of Object.entries(TRANSITION_PROPERTY_PRESETS)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["transition-property", "tp"], key),
					property: "transition-property",
					value,
				})
			);
		}

		// transition-duration (was in effects.js, now here)
		out.push(emit.sub("TRANSITION-DURATION"));
		for (const [key, value] of Object.entries(catalog.duration)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["transition-duration", "tdur"], key),
					property: "transition-duration",
					value,
				})
			);
		}

		// transition-timing-function (was in effects.js, now here)
		out.push(emit.sub("TRANSITION-TIMING-FUNCTION"));
		for (const [key, value] of Object.entries(catalog.ease)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["transition-timing-function", "ttf"], key),
					property: "transition-timing-function",
					value,
				})
			);
		}

		// transition-delay
		out.push(emit.sub("TRANSITION-DELAY"));
		for (const [key, value] of Object.entries(DELAY_VALUES)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["transition-delay", "tdly"], key),
					property: "transition-delay",
					value,
				})
			);
		}

		// transition shorthand (just `transition: <property>` with default duration/easing)
		out.push(emit.sub("TRANSITION (shorthand presets)"));
		out.push(
			emit.rule({
				selectors: emit.classPair(["transition", "tr"], "none"),
				property: "transition",
				value: "none",
			})
		);
		out.push(
			emit.rule({
				selectors: emit.classPair(["transition", "tr"], "all"),
				property: "transition",
				value: `all ${catalog.duration.normal} ${catalog.ease["in-out"]}`,
			})
		);
		out.push(
			emit.rule({
				selectors: emit.classPair(["transition", "tr"], "default"),
				property: "transition",
				value: `${TRANSITION_PROPERTY_PRESETS.default} ${catalog.duration.normal} ${catalog.ease["in-out"]}`,
			})
		);

		return out.join("\n\n") + "\n";
	},
};
