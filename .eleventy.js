module.exports = function(eleventyConfig) {
  // Example: add layout alias (optional)
  eleventyConfig.addLayoutAlias("default", "layout.njk");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
