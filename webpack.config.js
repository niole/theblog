const path = require('path');
module.exports = {
  entry: {
    'app': './main.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.sass']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
      {
        test: /\.sass$/,
        use: [{
                 loader: "style-loader"
             }, {
                 loader: "css-loader"
             }, {
                 loader: "sass-loader",
                 options: {
                     includePaths: ["style"]
                 }
             }]
      }
    ]
  },
  devServer: {
    open: true
  },
  devtool: 'source-map'
}
