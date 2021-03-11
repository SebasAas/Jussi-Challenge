const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    devServer: {
        port: 9000,
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}