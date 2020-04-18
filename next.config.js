

const { resolve } = require('path');
const withSass = require('@zeit/next-sass');
const employment = require('./data/employment');

module.exports = withSass({
  distDir: 'build/client/.next',
  webpack(config, options) {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      'styles': resolve(__dirname, 'styles'),
    });

    return config;
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return employment.reduce((prev, { slug }) => {
      return {
        ...prev,
        [`/role/${slug}`]: { page: '/role/[slug]', query: { slug } }
      }
    }, defaultPathMap);

    // return {
    //   '/': { page: '/' },
    //   '/role/engine-creative': { page: '/role/[slug]', query: { slug: 'engine-creative' } },
    //   '/role/purple-media': { page: '/role/[slug]', query: { slug: 'purple-media' } },
    //   '/role/two-seasons': { page: '/role/[slug]', query: { slug: 'two-seasons' } },
    // }
  }
});