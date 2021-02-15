/**
 * @file Imports modules and configures them with 11ty (.eleventy.js)
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import modules to include
const filters = require('./filters/index');
const shortcodes = require('./shortcodes/index');
const transforms = require('./transforms/index');

/**
 * A loader module for includes
 * @module _includes/index
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 */
module.exports = eleventyConfig => {
  // Function calls to modules to include
  filters(eleventyConfig);
  shortcodes(eleventyConfig);
  transforms(eleventyConfig);
};
