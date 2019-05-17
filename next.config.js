

const { resolve } = require('path');
const webpack = require('webpack');
const withTypescript = require("@zeit/next-typescript");
const withSass = require('@zeit/next-sass');
// const withFonts = require('next-fonts');
// const withImages = require('next-images');
// const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const plugins = [withTypescript, withSass];

const config = {
  distDir: '../../build/client/.next',
  webpack(config, options) {
    // register the common module in webpack
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [resolve(__dirname, 'src/common')],
      exclude: /node_modules/,
      use: {
        ...options.defaultLoaders.babel,
        options: {
          ...options.defaultLoaders.babel.options,
          cwd: __dirname
        }
      }
    });

    return config;
  }
}

module.exports = withTypescript(withSass(config));