var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        "app": './app/index.js'
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
}