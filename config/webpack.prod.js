const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

prodConfig = {
    mode: 'production'
}

module.exports = merge(commonConfig, prodConfig)