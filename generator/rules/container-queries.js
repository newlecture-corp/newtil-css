// Container-queries utilities — container-type, container-name.
// Note: actual @container at-rules can't be utility classes (they wrap content).
// These set up the CONTAINMENT context; querying happens via @container in user CSS.
import * as emit from "../emit.js";

const TYPE_VALUES = ["normal", "size", "inline-size"];

export default {
	fileName: "core/container-queries.css",
	generate(/* catalog */) {
		const out = [emit.header("CONTAINER-QUERIES UTILITIES — container-type")];
		out.push(emit.sub("CONTAINER-TYPE"));
		for (const v of TYPE_VALUES) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["container-type", "ct"], v),
					property: "container-type",
					value: v,
				})
			);
		}
		return out.join("\n\n") + "\n";
	},
};
