const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    // 入口
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 打包到dist
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        // hot: true
    },
    // 插件
    plugins: [
        // 清除dist
        new CleanWebpackPlugin(['dist']),
        // html插件
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        // mainfest
        new ManifestPlugin({
            writeToFileEmit: true
        })
    ],
    devtool: 'inline-source-map',
};