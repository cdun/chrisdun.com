import webpack from "webpack";
import path from "path";
import UglifyPlugin from 'uglifyjs-webpack-plugin';

export default {

  resolve: {
    alias: {
      'three/GLTFLoader'    : path.join(__dirname, 'node_modules/three/examples/js/loaders/GLTFLoader.js'),
      'three/OrbitControls' : path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
      {test: /\.json$/, loader: "json-loader"},
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {cacheDirectory: true}
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'THREE': 'three'
    }),
    new UglifyPlugin({

    })
  ],

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  externals:  [/^vendor\/.+\.js$/]
};
