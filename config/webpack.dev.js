const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

devConfig = {
    mode: 'development',
    devServer: {
        port: 9000,
        contentBase: './dist',
    },
}

module.exports = merge(commonConfig, devConfig)

