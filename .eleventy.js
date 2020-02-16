module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/audio')

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
