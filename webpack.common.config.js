const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: [
		"./source/index.js",
		"./source/index.css"
	],
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["latest"],
						plugins: ["transform-object-rest-spread"]
					}
				}
			},
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallbackLoader: "style-loader",
					loader: "css-loader",
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
			filename: "bundle.css",
			disable: false,
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: "./source/index.html"
		})
	]
}