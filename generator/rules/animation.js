// Animation utilities — properties + 4 common keyframe presets (spin, pulse, bounce, ping).
import * as emit from "../emit.js";

const ANIMATION_DIRECTION = ["normal", "reverse", "alternate", "alternate-reverse"];
const ANIMATION_FILL_MODE = ["none", "forwards", "backwards", "both"];
const ANIMATION_PLAY_STATE = ["running", "paused"];
const ANIMATION_ITERATION = ["1", "2", "3", "infinite"];

const KEYFRAMES = `
@keyframes newtil-spin {
	from { rotate: 0deg; }
	to { rotate: 360deg; }
}
@keyframes newtil-pulse {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.5; }
}
@keyframes newtil-bounce {
	0%, 100% {
		transform: translateY(-25%);
		animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
	}
	50% {
		transform: translateY(0);
		animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
	}
}
@keyframes newtil-ping {
	75%, 100% {
		transform: scale(2);
		opacity: 0;
	}
}
`;

const PRESETS = {
	none: "none",
	spin: "newtil-spin 1s linear infinite",
	pulse: "newtil-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
	bounce: "newtil-bounce 1s infinite",
	ping: "newtil-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
};

export default {
	fileName: "core/animation.css",
	generate(catalog) {
		const out = [emit.header("ANIMATION UTILITIES — presets + property selectors")];

		// keyframes definitions (raw CSS, not via emit.rule because they're @rules)
		out.push(emit.sub("KEYFRAMES (newtil-* prefixed)"));
		out.push(KEYFRAMES.trim());

		// animation shorthand presets
		out.push(emit.sub("ANIMATION (preset shorthand)"));
		for (const [key, value] of Object.entries(PRESETS)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["animation", "anim"], key),
					property: "animation",
					value,
				})
			);
		}

		// animation-duration (uses duration tokens)
		out.push(emit.sub("ANIMATION-DURATION"));
		for (const [key, value] of Object.entries(catalog.duration)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["animation-duration", "adur"], key),
					property: "animation-duration",
					value,
				})
			);
		}

		// animation-timing-function
		out.push(emit.sub("ANIMATION-TIMING-FUNCTION"));
		for (const [key, value] of Object.entries(catalog.ease)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["animation-timing-function", "atf"], key),
					property: "animation-timing-function",
					value,
				})
			);
		}

		// animation-direction
		out.push(emit.sub("ANIMATION-DIRECTION"));
		for (const v of ANIMATION_DIRECTION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["animation-direction", "adir"], v),
					property: "animation-direction",
					value: v,
				})
			);
		}

		// animation-fill-mode
		out.push(emit.sub("ANIMATION-FILL-MODE"));
		for (const v of ANIMATION_FILL_MODE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["animation-fill-mode", "afm"], v),
					property: "animation-fill-mode",
					value: v,
				})
			);
		}

		// animation-play-state
		out.push(emit.sub("ANIMATION-PLAY-STATE"));
		for (const v of ANIMATION_PLAY_STATE) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["animation-play-state", "aps"], v),
					property: "animation-play-state",
					value: v,
				})
			);
		}

		// animation-iteration-count
		out.push(emit.sub("ANIMATION-ITERATION-COUNT"));
		for (const v of ANIMATION_ITERATION) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["animation-iteration-count", "aic"], v),
					property: "animation-iteration-count",
					value: v,
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
