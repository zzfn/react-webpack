const {merge} = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base, {
    mode: 'development',
    target:"web",
    devServer: {
        hotOnly: true,
        progress:true,
    }
})
