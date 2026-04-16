// Resolver — given a parsed class { property, value }, look up in rule
// definitions and return CSS declaration(s).
//
// This is the REVERSE of the generator: generator goes rules→CSS,
// resolver goes className→CSS.
//
// Uses a lookup table built from the generator's rule modules.

import { buildCatalog, getToken } from "../generator/catalog.js";

// Build a reverse lookup: Map<"property:value", { declarations, selectorNames }>
// from generator rule modules.
//
// Instead of running each rule module (they produce CSS strings), we
// rebuild the property→value→declarations mapping programmatically.
// This means maintaining TWO codepaths (generator + resolver), but the
// resolver is much simpler — it only needs the mapping, not the CSS output.

let _catalog = null;
let _lookupTable = null;

function getCatalog() {
	if (!_catalog) _catalog = buildCatalog();
	return _catalog;
}

// Abbreviation → full property name mapping.
// Must mirror what generator/rules/*.js uses in classPair calls.
const ABBREV_MAP = {
	d: "display",
	pos: "position",
	m: "margin",
	mt: "margin-top",
	mr: "margin-right",
	mb: "margin-bottom",
	ml: "margin-left",
	mx: "margin-x",
	my: "margin-y",
	p: "padding",
	pt: "padding-top",
	pr: "padding-right",
	pb: "padding-bottom",
	pl: "padding-left",
	px: "padding-x",
	py: "padding-y",
	g: "gap",
	gr: "gap-row",
	gc: "gap-column",
	w: "width",
	h: "height",
	"min-w": "min-width",
	"min-h": "min-height",
	"max-w": "max-width",
	"max-h": "max-height",
	c: "color",
	bg: "background-color",
	bdc: "border-color",
	fs: "font-size",
	fw: "font-weight",
	fst: "font-style",
	ff: "font-family",
	lh: "line-height",
	ls: "letter-spacing",
	ta: "text-align",
	td: "text-decoration",
	tt: "text-transform",
	ws: "white-space",
	wb: "word-break",
	ow: "overflow-wrap",
	bdw: "border-width",
	bdwt: "border-width-top",
	bdwr: "border-width-right",
	bdwb: "border-width-bottom",
	bdwl: "border-width-left",
	bdwx: "border-width-x",
	bdwy: "border-width-y",
	bds: "border-style",
	bdr: "border-radius",
	bdrtl: "border-radius-top-left",
	bdrtr: "border-radius-top-right",
	bdrbl: "border-radius-bottom-left",
	bdrbr: "border-radius-bottom-right",
	bdrt: "border-radius-top",
	bdrr: "border-radius-right",
	bdrb: "border-radius-bottom",
	bdrl: "border-radius-left",
	op: "opacity",
	bsh: "box-shadow",
	cur: "cursor",
	vis: "visibility",
	of: "overflow",
	ofx: "overflow-x",
	ofy: "overflow-y",
	z: "z-index",
	trx: "translate-x",
	try: "translate-y",
	rot: "rotate",
	scl: "scale",
	skx: "skew-x",
	sky: "skew-y",
	tro: "transform-origin",
	tp: "transition-property",
	tdur: "transition-duration",
	ttf: "transition-timing-function",
	tdly: "transition-delay",
	tr: "transition",
	blr: "blur",
	brt: "brightness",
	cnt: "contrast",
	sat: "saturate",
	gray: "grayscale",
	sep: "sepia",
	inv: "invert",
	hue: "hue-rotate",
	ar: "aspect-ratio",
	ofit: "object-fit",
	opos: "object-position",
	olw: "outline-width",
	ols: "outline-style",
	olc: "outline-color",
	olo: "outline-offset",
	bgi: "background-image",
	bgp: "background-position",
	bgs: "background-size",
	bgr: "background-repeat",
	bga: "background-attachment",
	bgc: "background-clip",
	bgo: "background-origin",
	tsh: "text-shadow",
	ti: "text-indent",
	to: "text-overflow",
	va: "vertical-align",
	wsp: "word-spacing",
	tw: "text-wrap",
	hy: "hyphens",
	dir: "direction",
	sst: "scroll-snap-type",
	ssa: "scroll-snap-align",
	sss: "scroll-snap-stop",
	sb: "scroll-behavior",
	ct: "container-type",
	bs: "box-sizing",
	bdb: "box-decoration-break",
	lst: "list-style-type",
	lsp: "list-style-position",
	tl: "table-layout",
	bdsp: "border-spacing",
	cs: "caption-side",
	ec: "empty-cells",
	anim: "animation",
	adur: "animation-duration",
	atf: "animation-timing-function",
	adir: "animation-direction",
	afm: "animation-fill-mode",
	aps: "animation-play-state",
	aic: "animation-iteration-count",
	rs: "resize",
	us: "user-select",
	pe: "pointer-events",
	mbm: "mix-blend-mode",
	bbm: "background-blend-mode",
	iso: "isolation",
	cc: "column-count",
	cgl: "column-gap-len",
	bri: "break-inside",
	brb: "break-before",
	bra: "break-after",
	sw: "stroke-width",
	fl: "float",
	cl: "clear",
	fx: "flex",
	fd: "flex-direction",
	fwrap: "flex-wrap",
	jc: "justify-content",
	ai: "align-items",
	as: "align-self",
	ac: "align-content",
	fg: "flex-grow",
	fsh: "flex-shrink",
	gtc: "grid-template-columns",
	gtr: "grid-template-rows",
	gcs: "grid-column",
	grs: "grid-row",
	lc: "line-clamp",
};

// Resolve abbreviation to full property name.
export function resolveAbbrev(name) {
	return ABBREV_MAP[name] || name;
}

// Given a resolved property name and value, return the CSS declarations.
// Returns: { declarations: [{ property, value }], selectorBase: string } or null.
//
// This is a simplified resolver that maps directly from property+value
// to CSS output. It mirrors the generator rules but in reverse.
export function resolve(property, value) {
	const catalog = getCatalog();

	// Resolve abbreviation.
	const prop = resolveAbbrev(property);

	// Try to find in our rule definitions.
	// The approach: check if the property corresponds to a known category
	// and if the value exists in the token catalog or is a known static value.

	const result = tryResolve(prop, value, catalog);
	return result;
}

function tryResolve(prop, value, catalog) {
	// === DISPLAY ===
	if (prop === "display") {
		const valid = [
			"none", "block", "inline", "inline-block", "flex", "inline-flex",
			"grid", "inline-grid", "flow-root", "contents", "list-item",
			"table", "table-row", "table-cell",
		];
		if (valid.includes(value))
			return { declarations: [{ property: "display", value }] };
	}

	// === SPACING (margin/padding/gap + directional) ===
	const spacingMap = {
		margin: [["margin"]],
		"margin-top": [["margin-top"]],
		"margin-right": [["margin-right"]],
		"margin-bottom": [["margin-bottom"]],
		"margin-left": [["margin-left"]],
		"margin-x": [["margin-left", "margin-right"]],
		"margin-y": [["margin-top", "margin-bottom"]],
		padding: [["padding"]],
		"padding-top": [["padding-top"]],
		"padding-right": [["padding-right"]],
		"padding-bottom": [["padding-bottom"]],
		"padding-left": [["padding-left"]],
		"padding-x": [["padding-left", "padding-right"]],
		"padding-y": [["padding-top", "padding-bottom"]],
		gap: [["gap"]],
		"gap-row": [["row-gap"]],
		"gap-column": [["column-gap"]],
	};
	if (spacingMap[prop]) {
		let tokenVal;
		if (value === "auto") {
			tokenVal = "auto";
		} else if (catalog.space && value in catalog.space) {
			tokenVal = catalog.space[value];
		} else {
			return null;
		}
		const props = spacingMap[prop][0];
		return {
			declarations: props.map((p) => ({ property: p, value: tokenVal })),
		};
	}

	// === SIZING ===
	const sizingMap = {
		width: "width",
		height: "height",
		"min-width": "min-width",
		"min-height": "min-height",
		"max-width": "max-width",
		"max-height": "max-height",
	};
	if (sizingMap[prop]) {
		const specials = { none: "none", "min-content": "min-content", "max-content": "max-content", "fit-content": "fit-content" };
		let tokenVal = specials[value] || (catalog.size && catalog.size[value]);
		if (tokenVal)
			return { declarations: [{ property: sizingMap[prop], value: tokenVal }] };
	}

	// === COLORS ===
	const colorMap = {
		color: "color",
		"background-color": "background-color",
		"border-color": "border-color",
	};
	if (colorMap[prop]) {
		const specials = {
			transparent: "transparent",
			white: "#ffffff",
			black: "#000000",
			current: "currentColor",
			inherit: "inherit",
		};
		let tokenVal = specials[value] || (catalog.color && catalog.color[value]);
		if (tokenVal)
			return { declarations: [{ property: colorMap[prop], value: tokenVal }] };
	}

	// === FONT-SIZE ===
	if (prop === "font-size" && catalog["font-size"] && value in catalog["font-size"]) {
		return { declarations: [{ property: "font-size", value: catalog["font-size"][value] }] };
	}

	// === FONT-WEIGHT ===
	if (prop === "font-weight" && catalog["font-weight"] && value in catalog["font-weight"]) {
		return { declarations: [{ property: "font-weight", value: catalog["font-weight"][value] }] };
	}

	// === OPACITY ===
	if (prop === "opacity" && catalog.opacity && value in catalog.opacity) {
		return { declarations: [{ property: "opacity", value: catalog.opacity[value] }] };
	}

	// === BOX-SHADOW ===
	if (prop === "box-shadow" && catalog.shadow && value in catalog.shadow) {
		return { declarations: [{ property: "box-shadow", value: catalog.shadow[value] }] };
	}

	// === BORDER-RADIUS ===
	if (prop === "border-radius" && catalog.radius && value in catalog.radius) {
		return { declarations: [{ property: "border-radius", value: catalog.radius[value] }] };
	}

	// === Z-INDEX ===
	if (prop === "z-index" && catalog.z && value in catalog.z) {
		return { declarations: [{ property: "z-index", value: catalog.z[value] }] };
	}

	// === GRID ===
	if (prop === "grid-template-columns") {
		if (value === "none") return { declarations: [{ property: "grid-template-columns", value: "none" }] };
		const n = parseInt(value, 10);
		if (!isNaN(n) && n >= 1 && n <= 12)
			return { declarations: [{ property: "grid-template-columns", value: `repeat(${n}, minmax(0, 1fr))` }] };
	}
	if (prop === "grid-template-rows") {
		if (value === "none") return { declarations: [{ property: "grid-template-rows", value: "none" }] };
		const n = parseInt(value, 10);
		if (!isNaN(n) && n >= 1 && n <= 12)
			return { declarations: [{ property: "grid-template-rows", value: `repeat(${n}, minmax(0, 1fr))` }] };
	}
	if (prop === "grid-column" && value.startsWith("span-")) {
		const n = value.slice(5);
		return { declarations: [{ property: "grid-column", value: `span ${n} / span ${n}` }] };
	}
	if (prop === "grid-row" && value.startsWith("span-")) {
		const n = value.slice(5);
		return { declarations: [{ property: "grid-row", value: `span ${n} / span ${n}` }] };
	}

	// === TRANSFORM (modern individual properties) ===
	if (prop === "translate-x" && catalog.space && value in catalog.space)
		return { declarations: [{ property: "translate", value: `${catalog.space[value]} 0` }] };
	if (prop === "translate-y" && catalog.space && value in catalog.space)
		return { declarations: [{ property: "translate", value: `0 ${catalog.space[value]}` }] };
	if (prop === "rotate") {
		const v = value === "0" ? "0" : `${value}deg`;
		return { declarations: [{ property: "rotate", value: v }] };
	}
	if (prop === "scale") {
		const scaleMap = { "0": "0", "50": "0.5", "75": "0.75", "90": "0.9", "95": "0.95", "100": "1", "105": "1.05", "110": "1.1", "125": "1.25", "150": "1.5" };
		if (scaleMap[value]) return { declarations: [{ property: "scale", value: scaleMap[value] }] };
	}
	if (prop === "skew-x") return { declarations: [{ property: "transform", value: `skewX(${value}deg)` }] };
	if (prop === "skew-y") return { declarations: [{ property: "transform", value: `skewY(${value}deg)` }] };
	if (prop === "transform-origin") return { declarations: [{ property: "transform-origin", value: value.replace(/-/g, " ") }] };

	// === FILTER ===
	const filterFns = { blur: "blur", brightness: "brightness", contrast: "contrast", saturate: "saturate", grayscale: "grayscale", sepia: "sepia", invert: "invert" };
	if (filterFns[prop]) {
		const blurVals = { none: "0", sm: "4px", md: "8px", lg: "12px", xl: "16px", "2xl": "24px", "3xl": "40px" };
		const pctVals = { "0": "0", "50": "0.5", "75": "0.75", "90": "0.9", "100": "1", "110": "1.1", "125": "1.25", "150": "1.5", "200": "2" };
		let val;
		if (prop === "blur") val = blurVals[value];
		else val = pctVals[value];
		if (val) return { declarations: [{ property: "filter", value: `${filterFns[prop]}(${val})` }] };
	}
	if (prop === "hue-rotate") {
		return { declarations: [{ property: "filter", value: `hue-rotate(${value}deg)` }] };
	}
	if (prop === "filter" && value === "none")
		return { declarations: [{ property: "filter", value: "none" }] };

	// === BACKDROP-FILTER ===
	const bdFilterMap = { "backdrop-blur": "blur", "backdrop-brightness": "brightness", "backdrop-contrast": "contrast", "backdrop-saturate": "saturate", "backdrop-grayscale": "grayscale", "backdrop-invert": "invert", "backdrop-hue-rotate": "hue-rotate" };
	if (bdFilterMap[prop]) {
		const fn = bdFilterMap[prop];
		const blurVals = { none: "0", sm: "4px", md: "8px", lg: "12px", xl: "16px", "2xl": "24px", "3xl": "40px" };
		const pctVals = { "0": "0", "50": "0.5", "75": "0.75", "90": "0.9", "100": "1", "110": "1.1", "125": "1.25", "150": "1.5", "200": "2" };
		let val;
		if (fn === "blur") val = blurVals[value];
		else if (fn === "hue-rotate") val = `${value}deg`;
		else val = pctVals[value];
		if (val) return { declarations: [{ property: "backdrop-filter", value: `${fn}(${val})` }] };
	}
	if (prop === "backdrop-filter" && value === "none")
		return { declarations: [{ property: "backdrop-filter", value: "none" }] };

	// === ANIMATION shorthand ===
	if (prop === "animation") {
		const presets = {
			none: "none",
			spin: "newtil-spin 1s linear infinite",
			pulse: "newtil-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			bounce: "newtil-bounce 1s infinite",
			ping: "newtil-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
		};
		if (presets[value]) return { declarations: [{ property: "animation", value: presets[value] }] };
	}

	// === TRANSITION shorthand ===
	if (prop === "transition") {
		const dur = catalog.duration || {};
		const ease = catalog.ease || {};
		const presets = { none: "none", all: `all ${dur.normal || "250ms"} ${ease["in-out"] || "ease"}` };
		if (presets[value]) return { declarations: [{ property: "transition", value: presets[value] }] };
		if (value === "default") {
			const defaultProps = "color, background-color, border-color, outline-color, fill, stroke, opacity, box-shadow, transform, translate, rotate, scale, filter, backdrop-filter";
			return { declarations: [{ property: "transition", value: `${defaultProps} ${dur.normal || "250ms"} ${ease["in-out"] || "ease"}` }] };
		}
	}

	// === TRANSITION DURATION/EASING (token-based) ===
	if (prop === "transition-duration" && catalog.duration && value in catalog.duration)
		return { declarations: [{ property: "transition-duration", value: catalog.duration[value] }] };
	if (prop === "transition-timing-function" && catalog.ease && value in catalog.ease)
		return { declarations: [{ property: "transition-timing-function", value: catalog.ease[value] }] };
	if (prop === "transition-delay") {
		const delays = { "0": "0ms", "75": "75ms", "100": "100ms", "150": "150ms", "200": "200ms", "300": "300ms", "500": "500ms", "700": "700ms", "1000": "1000ms" };
		if (delays[value]) return { declarations: [{ property: "transition-delay", value: delays[value] }] };
	}
	if (prop === "transition-property") {
		const propPresets = { none: "none", all: "all", colors: "color, background-color, border-color, outline-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform, translate, rotate, scale" };
		if (propPresets[value]) return { declarations: [{ property: "transition-property", value: propPresets[value] }] };
	}

	// === ASPECT-RATIO ===
	if (prop === "aspect-ratio") {
		const ratios = { auto: "auto", square: "1 / 1", "1-1": "1 / 1", video: "16 / 9", "16-9": "16 / 9", "4-3": "4 / 3", "3-2": "3 / 2", "2-1": "2 / 1", "1-2": "1 / 2", portrait: "3 / 4", "3-4": "3 / 4", "9-16": "9 / 16", cinemascope: "21 / 9", "21-9": "21 / 9" };
		if (ratios[value]) return { declarations: [{ property: "aspect-ratio", value: ratios[value] }] };
	}

	// === TEXT-SHADOW ===
	if (prop === "text-shadow") {
		const presets = { none: "none", sm: "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15)", md: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.2)", lg: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)", xl: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)" };
		if (presets[value]) return { declarations: [{ property: "text-shadow", value: presets[value] }] };
	}

	// === TEXT-INDENT / WORD-SPACING (spacing tokens) ===
	if ((prop === "text-indent" || prop === "word-spacing") && catalog.space && value in catalog.space)
		return { declarations: [{ property: prop, value: catalog.space[value] }] };

	// === SCROLL-SNAP-TYPE (custom mapping) ===
	if (prop === "scroll-snap-type") {
		if (value === "none") return { declarations: [{ property: "scroll-snap-type", value: "none" }] };
		const parts = value.split("-");
		const axis = parts[0];
		const strictness = parts[1] || "proximity";
		return { declarations: [{ property: "scroll-snap-type", value: `${axis} ${strictness}` }] };
	}

	// === SCROLL-MARGIN / SCROLL-PADDING (spacing tokens + directional) ===
	const scrollSpacingMap = {
		"scroll-margin": [["scroll-margin"]], "scroll-margin-top": [["scroll-margin-top"]], "scroll-margin-right": [["scroll-margin-right"]], "scroll-margin-bottom": [["scroll-margin-bottom"]], "scroll-margin-left": [["scroll-margin-left"]], "scroll-margin-x": [["scroll-margin-left", "scroll-margin-right"]], "scroll-margin-y": [["scroll-margin-top", "scroll-margin-bottom"]],
		"scroll-padding": [["scroll-padding"]], "scroll-padding-top": [["scroll-padding-top"]], "scroll-padding-right": [["scroll-padding-right"]], "scroll-padding-bottom": [["scroll-padding-bottom"]], "scroll-padding-left": [["scroll-padding-left"]], "scroll-padding-x": [["scroll-padding-left", "scroll-padding-right"]], "scroll-padding-y": [["scroll-padding-top", "scroll-padding-bottom"]],
	};
	if (scrollSpacingMap[prop] && catalog.space && value in catalog.space) {
		return { declarations: scrollSpacingMap[prop][0].map(p => ({ property: p, value: catalog.space[value] })) };
	}

	// === BORDER-WIDTH (token + directional) ===
	const bwMap = {
		"border-width": [["border-width"]], "border-width-top": [["border-top-width"]], "border-width-right": [["border-right-width"]], "border-width-bottom": [["border-bottom-width"]], "border-width-left": [["border-left-width"]], "border-width-x": [["border-left-width", "border-right-width"]], "border-width-y": [["border-top-width", "border-bottom-width"]],
	};
	if (bwMap[prop] && catalog["border-width"] && value in catalog["border-width"]) {
		return { declarations: bwMap[prop][0].map(p => ({ property: p, value: catalog["border-width"][value] })) };
	}

	// === BORDER-RADIUS (token + directional) ===
	const brMap = {
		"border-radius": [["border-radius"]], "border-radius-top-left": [["border-top-left-radius"]], "border-radius-top-right": [["border-top-right-radius"]], "border-radius-bottom-left": [["border-bottom-left-radius"]], "border-radius-bottom-right": [["border-bottom-right-radius"]], "border-radius-top": [["border-top-left-radius", "border-top-right-radius"]], "border-radius-right": [["border-top-right-radius", "border-bottom-right-radius"]], "border-radius-bottom": [["border-bottom-left-radius", "border-bottom-right-radius"]], "border-radius-left": [["border-top-left-radius", "border-bottom-left-radius"]],
	};
	if (brMap[prop] && catalog.radius && value in catalog.radius) {
		return { declarations: brMap[prop][0].map(p => ({ property: p, value: catalog.radius[value] })) };
	}

	// === OUTLINE (token-based) ===
	if (prop === "outline-width" && catalog["border-width"] && value in catalog["border-width"])
		return { declarations: [{ property: "outline-width", value: catalog["border-width"][value] }] };
	if (prop === "outline-color") {
		const specials = { transparent: "transparent", current: "currentColor", white: "#ffffff", black: "#000000" };
		const val = specials[value] || (catalog.color && catalog.color[value]);
		if (val) return { declarations: [{ property: "outline-color", value: val }] };
	}
	if (prop === "outline-offset" && catalog.space && value in catalog.space)
		return { declarations: [{ property: "outline-offset", value: catalog.space[value] }] };

	// === BORDER-SPACING (spacing tokens) ===
	if (prop === "border-spacing" && catalog.space && value in catalog.space)
		return { declarations: [{ property: "border-spacing", value: catalog.space[value] }] };

	// === COLUMN-GAP (spacing tokens) ===
	if (prop === "column-gap-len" && catalog.space && value in catalog.space)
		return { declarations: [{ property: "column-gap", value: catalog.space[value] }] };

	// === FONT-FAMILY ===
	if (prop === "font-family") {
		const families = { sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif", mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", "system-ui": "system-ui", inherit: "inherit" };
		if (families[value]) return { declarations: [{ property: "font-family", value: families[value] }] };
	}

	// === LINE-HEIGHT ===
	if (prop === "line-height" && catalog["line-height"] && value in catalog["line-height"])
		return { declarations: [{ property: "line-height", value: catalog["line-height"][value] }] };

	// === LETTER-SPACING ===
	if (prop === "letter-spacing" && catalog["letter-spacing"] && value in catalog["letter-spacing"])
		return { declarations: [{ property: "letter-spacing", value: catalog["letter-spacing"][value] }] };

	// === DURATION (token) ===
	if (prop === "animation-duration" && catalog.duration && value in catalog.duration)
		return { declarations: [{ property: "animation-duration", value: catalog.duration[value] }] };
	if (prop === "animation-timing-function" && catalog.ease && value in catalog.ease)
		return { declarations: [{ property: "animation-timing-function", value: catalog.ease[value] }] };

	// === SVG ===
	if (prop === "fill" || prop === "stroke") {
		const specials = { none: "none", transparent: "transparent", current: "currentColor", white: "#ffffff", black: "#000000" };
		const val = specials[value] || (catalog.color && catalog.color[value]);
		if (val) return { declarations: [{ property: prop, value: val }] };
	}
	if (prop === "stroke-width" && catalog["border-width"] && value in catalog["border-width"])
		return { declarations: [{ property: "stroke-width", value: catalog["border-width"][value] }] };

	// === STACK / HSTACK composites (with value) ===
	if (prop === "stack" && catalog.space && value in catalog.space)
		return { declarations: [{ property: "display", value: "flex" }, { property: "flex-direction", value: "column" }, { property: "gap", value: catalog.space[value] }] };
	if (prop === "hstack" && catalog.space && value in catalog.space)
		return { declarations: [{ property: "display", value: "flex" }, { property: "flex-direction", value: "row" }, { property: "align-items", value: "center" }, { property: "gap", value: catalog.space[value] }] };

	// === LINE-CLAMP composite ===
	if (prop === "line-clamp") {
		if (value === "none") return { declarations: [{ property: "display", value: "block" }, { property: "-webkit-line-clamp", value: "unset" }, { property: "-webkit-box-orient", value: "unset" }, { property: "overflow", value: "visible" }] };
		const n = parseInt(value, 10);
		if (!isNaN(n) && n >= 1) return { declarations: [{ property: "display", value: "-webkit-box" }, { property: "-webkit-box-orient", value: "vertical" }, { property: "-webkit-line-clamp", value: String(n) }, { property: "overflow", value: "hidden" }] };
	}

	// === FLEX shorthand ===
	if (prop === "flex") {
		const presets = { "1": "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" };
		if (presets[value]) return { declarations: [{ property: "flex", value: presets[value] }] };
	}

	// === LOGICAL PROPERTIES (spacing tokens) ===
	const logicalMap = {
		"margin-block": [["margin-block"]], "margin-block-start": [["margin-block-start"]], "margin-block-end": [["margin-block-end"]], "margin-inline": [["margin-inline"]], "margin-inline-start": [["margin-inline-start"]], "margin-inline-end": [["margin-inline-end"]],
		"padding-block": [["padding-block"]], "padding-block-start": [["padding-block-start"]], "padding-block-end": [["padding-block-end"]], "padding-inline": [["padding-inline"]], "padding-inline-start": [["padding-inline-start"]], "padding-inline-end": [["padding-inline-end"]],
		"inset-block": [["inset-block"]], "inset-block-start": [["inset-block-start"]], "inset-block-end": [["inset-block-end"]], "inset-inline": [["inset-inline"]], "inset-inline-start": [["inset-inline-start"]], "inset-inline-end": [["inset-inline-end"]],
	};
	if (logicalMap[prop]) {
		let tokenVal;
		if (value === "auto") tokenVal = "auto";
		else if (catalog.space && value in catalog.space) tokenVal = catalog.space[value];
		else return null;
		return { declarations: logicalMap[prop][0].map(p => ({ property: p, value: tokenVal })) };
	}

	// === GENERIC PASS-THROUGH ===
	// For properties that use CSS keyword values directly (no token lookup).
	// The property name IS the CSS property, value IS the CSS value.
	const passthrough = [
		"position", "text-align", "text-decoration", "text-transform",
		"font-style", "white-space", "word-break", "overflow-wrap",
		"visibility", "overflow", "overflow-x", "overflow-y",
		"cursor", "flex-direction", "flex-wrap", "justify-content",
		"align-items", "align-self", "align-content", "flex-grow",
		"flex-shrink", "border-style", "float", "clear", "resize",
		"user-select", "pointer-events", "touch-action", "isolation",
		"mix-blend-mode", "background-blend-mode", "object-fit",
		"object-position", "background-position", "background-size",
		"background-repeat", "background-attachment", "background-clip",
		"background-origin", "outline-style", "text-overflow",
		"vertical-align", "text-wrap", "hyphens", "direction",
		"scroll-snap-align", "scroll-snap-stop", "scroll-behavior",
		"container-type", "box-sizing", "box-decoration-break",
		"table-layout", "border-collapse", "caption-side", "empty-cells",
		"column-count", "break-inside", "break-before", "break-after",
		"list-style-type", "list-style-position",
		"animation-direction", "animation-fill-mode",
		"animation-play-state", "animation-iteration-count",
	];
	if (passthrough.includes(prop)) {
		// Object-position and transform-origin: convert hyphen to space.
		let cssVal = value;
		if (prop === "object-position" || prop === "background-position" || prop === "transform-origin") {
			cssVal = value.replace(/-/g, " ");
		}
		return { declarations: [{ property: prop, value: cssVal }] };
	}

	// === COMPOSITES (unary) ===
	const composites = {
		truncate: [
			{ property: "overflow", value: "hidden" },
			{ property: "text-overflow", value: "ellipsis" },
			{ property: "white-space", value: "nowrap" },
		],
		"sr-only": [
			{ property: "position", value: "absolute" },
			{ property: "width", value: "1px" },
			{ property: "height", value: "1px" },
			{ property: "padding", value: "0" },
			{ property: "margin", value: "-1px" },
			{ property: "overflow", value: "hidden" },
			{ property: "clip", value: "rect(0, 0, 0, 0)" },
			{ property: "white-space", value: "nowrap" },
			{ property: "border-width", value: "0" },
		],
		"not-sr-only": [
			{ property: "position", value: "static" },
			{ property: "width", value: "auto" },
			{ property: "height", value: "auto" },
			{ property: "padding", value: "0" },
			{ property: "margin", value: "0" },
			{ property: "overflow", value: "visible" },
			{ property: "clip", value: "auto" },
			{ property: "white-space", value: "normal" },
		],
		center: [
			{ property: "display", value: "flex" },
			{ property: "justify-content", value: "center" },
			{ property: "align-items", value: "center" },
		],
		"center-col": [
			{ property: "display", value: "flex" },
			{ property: "flex-direction", value: "column" },
			{ property: "justify-content", value: "center" },
			{ property: "align-items", value: "center" },
		],
		"fixed-center": [
			{ property: "position", value: "absolute" },
			{ property: "top", value: "50%" },
			{ property: "left", value: "50%" },
			{ property: "translate", value: "-50% -50%" },
		],
	};
	if (composites[prop] && value === "") {
		return { declarations: composites[prop] };
	}

	return null;
}
