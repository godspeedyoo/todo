module.exports = {
  entry: "./app.jsx",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }

}
