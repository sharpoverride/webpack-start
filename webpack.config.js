var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    devtool: 'eval',
    entry: {
        hot: 'webpack-hot-middleware/client',
        main: './src/main'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new CommonsChunkPlugin("commons.chunk.js"), 
        new LiveReloadPlugin({appendScriptTag: true})
    ],
     module: {
        loaders: [{
            test: /\.[j|t]sx?$/,
            loaders: ['awesome-typescript-loader'],
            include: path.join(__dirname, 'src')
        }]
  }
}
