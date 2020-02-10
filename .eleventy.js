module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images')

  return {
    dir: {
      input: 'src',
      output: 'build',
      data: '_data'
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    dataTemplateEngine: "njk",
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  }
}
