// Font-family utilities — common system stacks.
// (Customizable: future versions can read --font-family-* tokens from design-tokens.)
import * as emit from "../emit.js";

const FAMILIES = {
	sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
	serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
	mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
	"system-ui": "system-ui",
	inherit: "inherit",
};

export default {
	fileName: "core/font-family.css",
	generate(/* catalog */) {
		const out = [emit.header("FONT-FAMILY UTILITIES")];
		for (const [key, value] of Object.entries(FAMILIES)) {
			out.push(
				emit.rule({
					selectors: emit.classPair(["font-family", "ff"], key),
					property: "font-family",
					value,
				})
			);
		}
		return out.join("\n\n") + "\n";
	},
};
