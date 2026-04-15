// Object utilities — object-fit (img/video sizing) + object-position.
import * as emit from "../emit.js";

const FIT_VALUES = ["none", "contain", "cover", "fill", "scale-down"];
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

function positionValue(v) {
	return v.replace(/-/g, " ");
}

export default {
	fileName: "core/object.css",
	generate(/* catalog */) {
		const out = [emit.header("OBJECT UTILITIES — object-fit + object-position")];

		out.push(emit.sub("OBJECT-FIT"));
		for (const v of FIT_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["object-fit", "ofit"], v),
					property: "object-fit",
					value: v,
				})
			);
		}

		out.push(emit.sub("OBJECT-POSITION"));
		for (const v of POSITION_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["object-position", "opos"], v),
					property: "object-position",
					value: positionValue(v),
				})
			);
		}

		return out.join("\n\n") + "\n";
	},
};
