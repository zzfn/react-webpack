const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

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
