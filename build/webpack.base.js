const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

const scssRegex = /\.(scss)$/;
const scssModuleRegex = /\.module\.(scss)$/;

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        clean: true,
        path: path.resolve(__dirname, '../dist'),
        filename: '[contenthash:8].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx|js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
                        },
                    },
                ],
            },
            {
                test: scssModuleRegex,
                include: path.resolve(__dirname, '../src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 3,
                            modules: {
                                exportLocalsConvention: 'camelCaseOnly',
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'postcss-loader'
                ],
            },
            {
                test: scssRegex,
                exclude: scssModuleRegex,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 3,
                            modules: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'postcss-loader'
                ],
            },
        ]
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new Dotenv({
            systemvars: true,
            path: `./.env.${process.env.APP_ENV}`
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        })
    ].filter(Boolean),
    resolve: {
        extensions: ['.js', '.tsx', 'ts']
    }
}
