const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    stats: 'minimal',
    output: {
        filename: 'javascript/[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
            chunkFilename: 'style/[id].css',
            ignoreOrder: false
        })
    ],
    optimization: {
        namedModules: true,
        minimize: false
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: path.resolve(__dirname, '../dist'),
                    hmr: process.env.NODE_ENV === 'development'
                }
            }, {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            }, {
                loader: 'postcss-loader'
            }, {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }
            }, {
                loader: 'style-resources-loader',
                options: {
                    patterns: [path.resolve(__dirname, '../src/assets/css/base/global.less')]
                }
            }
            ]
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        // compress: true,
        port: 9002,
        host: '0.0.0.0',
        index: 'index.html',
        headers: {
            'X-Custom-Foo': 'bar'
        },
        // https: true,
        // inline: true,
        // lazy: false,
        // noInfo: true,
        open: true,
        overlay: true,//编译运行时的错误直接显示在浏览器
        // proxy: [{
        //     context: ['/tests'],
        //     target: 'http://localhost:3000',
        //     secure: false
        // }],
        // quiet: false,
        useLocalIp: true
    }
});
