path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	devtool: '#cheap-module-source-map',
	context: __dirname,
    entry: './app/App',
    output: {
        filename: 'bundle.js',
        path: './static/js',
        library: 'bundle'
    },	
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
			}, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]"
			}, {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file?name=../fonts/[name].[ext]"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]"
			}			
		]
	},
	plugins: [
        new ExtractTextPlugin('../css/style.css', {
            allChunks: true
        }),
		new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}),
		new webpack.optimize.DedupePlugin()
  	]
};
