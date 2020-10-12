const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(eleventyVue);
	eleventyConfig.addTransform("add-html-doctope", (content, outputPath) => {
		let doctype = "<!doctype html>";
		if (
			outputPath.endsWith(".html") &&
			!content
				.trim()
				.toLowerCase()
				.startsWith(doctype)
		) {
			return `${doctype}${content}`;
		}
		return content;
	});
};
