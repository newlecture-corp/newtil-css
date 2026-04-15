// Interaction utilities — resize, user-select, pointer-events, touch-action.
import * as emit from "../emit.js";

const RESIZE = ["none", "both", "horizontal", "vertical"];
const USER_SELECT = ["none", "text", "all", "auto"];
const POINTER_EVENTS = ["none", "auto"];
const TOUCH_ACTION = [
	"auto",
	"none",
	"pan-x",
	"pan-y",
	"pan-left",
	"pan-right",
	"pan-up",
	"pan-down",
	"pinch-zoom",
	"manipulation",
];

export default {
	fileName: "core/interaction.css",
	generate(/* catalog */) {
		const out = [emit.header("INTERACTION UTILITIES — resize, user-select, pointer-events, touch-action")];

		out.push(emit.sub("RESIZE"));
		for (const v of RESIZE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["resize", "rs"], v),
					property: "resize",
					value: v,
				})
			);
		}

		out.push(emit.sub("USER-SELECT"));
		for (const v of USER_SELECT) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["user-select", "us"], v),
					property: "user-select",
					value: v,
				})
			);
		}

		out.push(emit.sub("POINTER-EVENTS"));
		for (const v of POINTER_EVENTS) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["pointer-events", "pe"], v),
					property: "pointer-events",
					value: v,
				})
			);
		}

		out.push(emit.sub("TOUCH-ACTION"));
		for (const v of TOUCH_ACTION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["touch-action", "ta"], v),
					property: "touch-action",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
