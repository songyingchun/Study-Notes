const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     port: 9000,
    // },
    // 打包到dist
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // mode: "production",
    // 插件
    plugins: [
        // 清除dist
        new CleanWebpackPlugin(['dist']),
        // html插件
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // }),
    ],
    mode: "production"
};