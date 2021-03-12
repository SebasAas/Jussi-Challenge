const path = require('path')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        minimize: true
    },
}

module.exports = merge(commonConfig, prodConfig)