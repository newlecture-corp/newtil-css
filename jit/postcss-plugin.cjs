// CommonJS wrapper around the ESM postcss-plugin, for Webpack's postcss-loader
// (and other pipelines that load PostCSS plugins via synchronous `require()`).
//
// PostCSS plugins may declare an async `Once` that returns a Promise, so we
// lazily dynamic-import the ESM module on first invocation and delegate.

"use strict";

let implPromise = null;

function loadImpl() {
	if (!implPromise) {
		implPromise = import("./postcss-plugin.js").then((m) => m.default);
	}
	return implPromise;
}

function newtilJit(options = {}) {
	return {
		postcssPlugin: "newtil-css-jit",
		async Once(root, helper) {
			const factory = await loadImpl();
			const plugin = factory(options);
			await plugin.Once(root, helper);
		},
	};
}

newtilJit.postcss = true;

module.exports = newtilJit;
module.exports.default = newtilJit;