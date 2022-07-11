const { resolve } = require('path');
const employment = require('./data/employment');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack(config, options) {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      'styles': resolve(__dirname, 'styles'),
    });

    return config;
  }
});
