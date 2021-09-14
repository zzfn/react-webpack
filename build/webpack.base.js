const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const scssRegex = /\.(scss)$/;
const scssModuleRegex = /\.module\.(scss)$/;

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.tsx'),
    },
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
                use: ['babel-loader'],
            },
            {
                test: scssModuleRegex,
                include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: 'style-loader',
                    },
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
                ],
            },
        ]
    },
    plugins: [
        new Dotenv({
            systemvars: true,
            path: `./.env.${process.env.APP_ENV}`
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        })
    ],
    resolve: {
        extensions: ['.js', '.tsx', 'ts']
    }
}
