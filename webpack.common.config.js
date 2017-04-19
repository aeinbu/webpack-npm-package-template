const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader",
					publicPath: "/dist"
				})
			},
			{
				test: /.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 100000
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "index.css",
			disable: false,
			allChunks: true
		})
	]
}