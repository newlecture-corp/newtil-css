// Aspect-ratio utilities — common preset ratios + auto.
import * as emit from "../emit.js";

const RATIOS = {
	auto: "auto",
	square: "1 / 1",
	"1-1": "1 / 1",
	video: "16 / 9",
	"16-9": "16 / 9",
	"4-3": "4 / 3",
	"3-2": "3 / 2",
	"2-1": "2 / 1",
	"1-2": "1 / 2",
	portrait: "3 / 4",
	"3-4": "3 / 4",
	"9-16": "9 / 16",
	cinemascope: "21 / 9",
	"21-9": "21 / 9",
};

export default {
	fileName: "core/aspect-ratio.css",
	generate(/* catalog */) {
		const out = [emit.header("ASPECT-RATIO UTILITIES")];
		for (const [key, value] of Object.entries(RATIOS)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["aspect-ratio", "ar"], key),
					property: "aspect-ratio",
					value,
				})
			);
		}
		return out.join("\n\n") + "\n";
	},
};
