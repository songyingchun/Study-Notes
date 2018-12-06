const DEV=true;
module.exports={
  mode: DEV?'development':'production'
  entry: './src/index',
  output: {
    path: pathLib.resolve('dest'),
    filename: 'bundle.js'
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.vue', '.js', '.ts']
  },
  devServer: {
    contentBase: pathlib.resolve('static'),
    port:    8090,
    hot:     true,
    historyApiFallback:     true
  },
  module: {
    rules: [
      // ts
      {test: /\.tsx?/i,use: 'ts-loader'},
      // Babel
      {test: /\.js$/, use: 'babel-loader'},
      // css
      {test: /\.css$/, use: 'css-loader'},
      // image
      {test: /\.(jpg|png|gif|tif|svg)/, use: ['file-loader', 'image-webpack-loader']},
      // vue
      {test: /\.vue$/}
    ]
  }
}
