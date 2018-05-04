var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./app/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'            
            }
        }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './dist',
        inline: true
    },
    stats: {
         colors: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
    // devtool: 'source-map'
}