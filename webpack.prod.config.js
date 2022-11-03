const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.config')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[name][hash][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            hash: true,
            meta: {
                viewport: 'width=device-width, initial-scale=1.0',
                description: 'an app to search for countries\' informations',
                google: 'notranslate',
            },
        }),
        new HtmlWebpackInjectPreload({
            files: [
                {
                    match: /.*\.woff2$/,
                    attributes: {
                        as: 'font',
                        type: 'font/woff2',
                        crossorigin: false,
                    },
                },
                {
                    match: /.*\.woff$/,
                    attributes: {
                        as: 'font',
                        type: 'font/woff',
                        crossorigin: false,
                    },
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
})
