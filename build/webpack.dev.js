const {merge} = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base, {
    mode: 'development',
    devServer: {
        host: '0.0.0.0'
    }
})
