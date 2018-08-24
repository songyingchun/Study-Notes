const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmWebpackPlugin({
            title: 'Production'
        })  
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};