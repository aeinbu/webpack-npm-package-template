const webpack = require("webpack");
const commonConfig = require("./webpack.common.config");
const merge = (...objs) => require("deepmerge").all(objs, {arrayMerge: (arr1, arr2) => arr1.concat(arr2) });


const combinedConfigs = merge({}, commonConfig, {
	output: {
		publicPath: "/",
		filename: "bundle.js"
	},
	devtool: "#eval",
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		inline: true,
		contentBase: "wwwroot"
	}
});

module.exports = combinedConfigs;
