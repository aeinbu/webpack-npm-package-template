const path = require("path");
const commonConfig = require("./webpack.common.config");
const nodeExternals = require("webpack-node-externals");
const merge = (...objs) => require("deepmerge").all(objs, {arrayMerge: (arr1, arr2) => arr1.concat(arr2) });

const combinedConfig = merge({}, commonConfig, {
	entry: [
		"./src/index.js",
		"./src/index.css"
	],
	output: {
		path: path.resolve(__dirname, "./dist"),
		libraryTarget: "commonjs2",
		filename: "index.js"
	},
	devtool: "#source-map",
	externals: [
		nodeExternals()
	],
	mode: "production"
});

module.exports = combinedConfig;
