// .eleventy.js
module.exports = function(eleventyConfig) {
  // Add shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Add filter for excerpting just the intro section
  eleventyConfig.addFilter("excerpt", function(content) {
    const introSection = content.match(/<div class="intro-section">([\s\S]*?)<\/div>/);
    return introSection ? introSection[1] : '';
  });

  // Filter for formatting dates
  eleventyConfig.addFilter("formatDate", function(dateObj) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateObj).toLocaleDateString('en-US', options);
  });
  
  // Create a blog post collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date); // Sort by date, newest first
  });
  
  // Copy the `css` and `images` folders to the output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Enable the use of ESM in JavaScript files
  eleventyConfig.addTemplateFormats("js");
  eleventyConfig.addExtension("js", {
    outputFileExtension: "js",
    compile: async (inputContent) => {
      return async (data) => {
        return inputContent;
      };
    }
  });
  
  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    // Enable automatic reloading for development
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};