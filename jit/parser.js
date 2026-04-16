// Parser — decomposes a class name string into structured parts.
//
// Input:  "sm:hover:padding:4"
// Output: { breakpoint: 'sm', pseudo: 'hover', property: 'padding', value: '4' }
//
// Input:  "background-color:primary"
// Output: { breakpoint: null, pseudo: null, property: 'background-color', value: 'primary' }
//
// Input:  "truncate" (unary composite)
// Output: { breakpoint: null, pseudo: null, property: 'truncate', value: '' }

const BREAKPOINTS = new Set(["sm", "md", "lg", "xl"]);

const PSEUDOS = new Set([
	"hover",
	"focus",
	"focus-visible",
	"focus-within",
	"active",
	"disabled",
	"checked",
	"visited",
]);

const PSEUDO_CSS = {
	hover: ":hover",
	focus: ":focus",
	"focus-visible": ":focus-visible",
	"focus-within": ":focus-within",
	active: ":active",
	disabled: ":disabled",
	checked: ":checked",
	visited: ":visited",
};

const BREAKPOINT_WIDTHS = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
};

// Known CSS properties (multi-word with hyphens) that might be confused
// with prefix:property splits. We check longest-match first.
// This list covers properties used in newtil-css rule modules.
const KNOWN_PROPERTIES = [
	// Composite (unary — no value)
	"truncate",
	"sr-only",
	"not-sr-only",
	"center",
	"center-col",
	"fixed-center",
	// Multi-word properties (need to match before splitting)
	"background-color",
	"background-image",
	"background-position",
	"background-size",
	"background-repeat",
	"background-attachment",
	"background-clip",
	"background-origin",
	"backdrop-blur",
	"backdrop-brightness",
	"backdrop-contrast",
	"backdrop-saturate",
	"backdrop-grayscale",
	"backdrop-invert",
	"backdrop-hue-rotate",
	"backdrop-filter",
	"border-color",
	"border-width",
	"border-width-top",
	"border-width-right",
	"border-width-bottom",
	"border-width-left",
	"border-width-x",
	"border-width-y",
	"border-style",
	"border-radius",
	"border-radius-top-left",
	"border-radius-top-right",
	"border-radius-bottom-left",
	"border-radius-bottom-right",
	"border-radius-top",
	"border-radius-right",
	"border-radius-bottom",
	"border-radius-left",
	"border-collapse",
	"border-spacing",
	"box-sizing",
	"box-decoration-break",
	"box-shadow",
	"break-inside",
	"break-before",
	"break-after",
	"caption-side",
	"column-count",
	"column-gap-len",
	"container-type",
	"empty-cells",
	"flex-direction",
	"flex-wrap",
	"flex-grow",
	"flex-shrink",
	"font-size",
	"font-weight",
	"font-style",
	"font-family",
	"grid-template-columns",
	"grid-template-rows",
	"grid-column",
	"grid-row",
	"hue-rotate",
	"justify-content",
	"align-items",
	"align-self",
	"align-content",
	"letter-spacing",
	"line-height",
	"line-clamp",
	"list-style-type",
	"list-style-position",
	"margin-top",
	"margin-right",
	"margin-bottom",
	"margin-left",
	"margin-x",
	"margin-y",
	"margin-block",
	"margin-block-start",
	"margin-block-end",
	"margin-inline",
	"margin-inline-start",
	"margin-inline-end",
	"max-width",
	"max-height",
	"min-width",
	"min-height",
	"mix-blend-mode",
	"background-blend-mode",
	"object-fit",
	"object-position",
	"outline-width",
	"outline-style",
	"outline-color",
	"outline-offset",
	"overflow-x",
	"overflow-y",
	"overflow-wrap",
	"padding-top",
	"padding-right",
	"padding-bottom",
	"padding-left",
	"padding-x",
	"padding-y",
	"padding-block",
	"padding-block-start",
	"padding-block-end",
	"padding-inline",
	"padding-inline-start",
	"padding-inline-end",
	"pointer-events",
	"scroll-snap-type",
	"scroll-snap-align",
	"scroll-snap-stop",
	"scroll-behavior",
	"scroll-margin",
	"scroll-margin-top",
	"scroll-margin-right",
	"scroll-margin-bottom",
	"scroll-margin-left",
	"scroll-margin-x",
	"scroll-margin-y",
	"scroll-padding",
	"scroll-padding-top",
	"scroll-padding-right",
	"scroll-padding-bottom",
	"scroll-padding-left",
	"scroll-padding-x",
	"scroll-padding-y",
	"skew-x",
	"skew-y",
	"stroke-width",
	"table-layout",
	"text-align",
	"text-decoration",
	"text-transform",
	"text-overflow",
	"text-shadow",
	"text-indent",
	"text-wrap",
	"touch-action",
	"transform-origin",
	"transition-property",
	"transition-duration",
	"transition-timing-function",
	"transition-delay",
	"translate-x",
	"translate-y",
	"user-select",
	"vertical-align",
	"white-space",
	"word-break",
	"word-spacing",
	"inset-block",
	"inset-block-start",
	"inset-block-end",
	"inset-inline",
	"inset-inline-start",
	"inset-inline-end",
	"aspect-ratio",
	"animation-duration",
	"animation-timing-function",
	"animation-direction",
	"animation-fill-mode",
	"animation-play-state",
	"animation-iteration-count",
	"z-index",
];

// Sort by length desc so longest match wins.
const SORTED_PROPERTIES = [...KNOWN_PROPERTIES].sort(
	(a, b) => b.length - a.length
);

// Unary composites (no value part).
const UNARY = new Set([
	"truncate",
	"sr-only",
	"not-sr-only",
	"center",
	"center-col",
	"fixed-center",
]);

export function parse(className) {
	let rest = className;
	let breakpoint = null;
	let pseudo = null;

	// Peel off leading breakpoint prefix (e.g., "sm:")
	for (const bp of BREAKPOINTS) {
		if (rest.startsWith(bp + ":")) {
			breakpoint = bp;
			rest = rest.slice(bp.length + 1);
			break;
		}
	}

	// Peel off pseudo prefix (e.g., "hover:")
	// Handle multi-word pseudos like "focus-visible:" before "focus:"
	const sortedPseudos = [...PSEUDOS].sort((a, b) => b.length - a.length);
	for (const ps of sortedPseudos) {
		if (rest.startsWith(ps + ":")) {
			pseudo = ps;
			rest = rest.slice(ps.length + 1);
			break;
		}
	}

	// Check for unary composites first.
	if (UNARY.has(rest)) {
		return {
			breakpoint,
			pseudo,
			property: rest,
			value: "",
			breakpointWidth: breakpoint ? BREAKPOINT_WIDTHS[breakpoint] : null,
			pseudoCss: pseudo ? PSEUDO_CSS[pseudo] : null,
		};
	}

	// Find longest matching known property.
	let property = null;
	let value = null;
	for (const prop of SORTED_PROPERTIES) {
		if (rest.startsWith(prop + ":")) {
			property = prop;
			value = rest.slice(prop.length + 1);
			break;
		}
	}

	// Fallback: split on last colon for simple single-word properties.
	// e.g., "margin:4" → property=margin, value=4
	if (!property) {
		const colonIdx = rest.indexOf(":");
		if (colonIdx > 0) {
			property = rest.slice(0, colonIdx);
			value = rest.slice(colonIdx + 1);
		}
	}

	if (!property) return null;

	return {
		breakpoint,
		pseudo,
		property,
		value,
		breakpointWidth: breakpoint ? BREAKPOINT_WIDTHS[breakpoint] : null,
		pseudoCss: pseudo ? PSEUDO_CSS[pseudo] : null,
	};
}
