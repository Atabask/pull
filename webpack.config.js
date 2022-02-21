const { resolve } = require ('path')
const HtmlPlugin = require ('html-webpack-plugin')
const MiniCssPlugin = require ('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'test')
    },
    module: {
        rules: [
            {
                test:/\\.(mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                },
            },
            {
                test:/\.css$/i,
                use: [MiniCssPlugin.loader,'css-loader']
            }
        ]
    },

    plugins: [
        new MiniCssPlugin ({
            filename: 'main.[contenthash].css'
        }),

        new HtmlPlugin ({
            template: resolve(__dirname, 'index.html')
        }),

    ]
};