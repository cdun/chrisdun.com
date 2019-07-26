

const { resolve } = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: 'build/client/.next',
  webpack(config, options) {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      'styles': resolve(__dirname, 'styles'),
    });

    return config;
  }
});