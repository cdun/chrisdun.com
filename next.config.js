const webpack = require('webpack');
const withTypescript = require("@zeit/next-typescript");
const withSass = require('@zeit/next-sass');
// const withFonts = require('next-fonts');
// const withImages = require('next-images');
// const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const plugins = [withTypescript, withSass];

const config = {
  distDir: '../../build/client/.next',
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
      '/': {page: '/index'},
      '/product': {page: '/product', query: {store: 'uk', product: "", shade: ""}},
      '/products': {page: '/products', query: {store: 'uk', product: "", shade: ""}}
    }
  }
}

module.exports = withTypescript(withSass(config));