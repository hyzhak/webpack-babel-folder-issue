module.exports = {
  devtool: 'inline-source-map',

  entry: "./config/entry-file.js",

  output: {
      path: "./dist",
      filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  target: 'node'
};
