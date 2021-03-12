const path = require('path')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

devConfig = {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        port: 9000,
        contentBase: './dist',
    },
}

module.exports = merge(commonConfig, devConfig)

