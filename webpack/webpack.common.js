const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.ts')
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin({
            entries: true,
            modules: true,
            modulesCount: 100,
            profile: true
            // handler: (percentage, message, ...args) => { }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: path.resolve(__dirname, '../public/favicon.ico'),
            filename: 'index.html',
            inject: true // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
        })
    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            maxInitialRequests: 4,
            cacheGroups: {
                vendor: {
                    test: (module) => {
                        return (
                            module.resource &&
                            /\.js$/.test(module.resource) &&
                            module.resource.indexOf(
                                path.join(__dirname, '../node_modules')
                            ) === 0
                        )
                    },
                    name: 'vendor'
                },
                manifest: {
                    minChunks: Infinity
                },
                app: {
                    chunks: 'async',
                    minChunks: 3
                },
                default: false,
                vendors: false
            }
        },
        minimize: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.(tsx|ts)$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue', '.css', '.less', '.json', '.ts']
    }
};
