const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'none',
    stats: 'errors-only',
    output: {
        filename: 'javascript/[hash:20][id].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[hash:20][chunkhash].css',
            chunkFilename: 'style/[hash:20][id].css',
            ignoreOrder: false
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }]
            },
            canPrint: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [{
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf|ico|pub)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'image',
                    publicPath: '../image',
                    name: '[hash:20].[ext]'
                }
            }]
        }, {
            test: /\.(css|less)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: path.resolve(__dirname, '../dist'),
                    hmr: process.env.NODE_ENV === 'production'
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
                        plugins: [
                            new CleanCSSPlugin({
                                advanced: true
                            })
                        ]
                    }
                }
            }, {
                loader: 'style-resources-loader',
                options: {
                    patterns: [
                        path.resolve(__dirname, '../src/assets/css/base/global.less')
                    ]
                }
            }]
        }]
    }
});
