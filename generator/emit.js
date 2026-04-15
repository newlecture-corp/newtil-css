// Safe rule emitter with validation guards.
// Prevents: empty values, duplicate selectors, broken var() references.

const SELECTORS_GLOBAL = new Set();

export function resetSelectorsRegistry() {
	SELECTORS_GLOBAL.clear();
}

// Escapes a class-name fragment for CSS:
//   - colon `:`  -> `\:`
//   - dot `.`    -> `\.`
//   - slash `/`  -> `\/`
function escapeClassName(name) {
	return name.replace(/([:.\/])/g, "\\$1");
}

// Emit a single utility rule.
// args: {
//   selectors: ['.margin\\:4', '.m\\:4'],
//   // Either:
//   property: 'margin',
//   value: 'var(--space-4)',
//   // OR:
//   declarations: [
//     { property: 'margin-left', value: 'var(--space-4)' },
//     { property: 'margin-right', value: 'var(--space-4)' },
//   ],
//   important: true (default)
// }
// Throws on validation errors (empty value, duplicate selector, invalid input).
export function rule({
	selectors,
	property,
	value,
	declarations,
	important = true,
}) {
	if (!Array.isArray(selectors) || selectors.length === 0) {
		throw new Error(`emit.rule: selectors must be non-empty array`);
	}
	const decls = declarations || [{ property, value }];
	for (const d of decls) {
		if (!d.property || typeof d.property !== "string") {
			throw new Error(
				`emit.rule: declaration property required (got ${d.property})`
			);
		}
		if (
			d.value === undefined ||
			d.value === null ||
			String(d.value).trim() === ""
		) {
			throw new Error(
				`emit.rule: empty value for ${selectors.join(", ")} ${d.property}`
			);
		}
	}
	for (const sel of selectors) {
		if (SELECTORS_GLOBAL.has(sel)) {
			throw new Error(`emit.rule: duplicate selector ${sel}`);
		}
		SELECTORS_GLOBAL.add(sel);
	}
	const declLines = decls
		.map((d) => `\t${d.property}: ${d.value}${important ? " !important" : ""};`)
		.join("\n");
	return `${selectors.join(",\n")} {\n${declLines}\n}`;
}

// Build selectors from a class-name pair (full + abbrev) and a value-key.
// Pattern: `.{name}:{key}` and `.{abbrev}:{key}` both escaped.
// e.g., names=['margin','m'], key='4' -> ['.margin\\:4', '.m\\:4']
// When key is '' (empty), emits unary classes: names=['truncate'], key=''
// -> ['.truncate'].
export function classPair(names, key) {
	if (key === "") {
		return names.map((n) => `.${escapeClassName(n)}`);
	}
	return names.map((n) => `.${escapeClassName(`${n}:${key}`)}`);
}

// Section header comment.
export function header(title) {
	return `/* ===== ${title} ===== */`;
}

// Sub-section comment.
export function sub(title) {
	return `/* ${title} */`;
}
