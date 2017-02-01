const commonConfig = require("./webpack.common.config");
const nodeExternals = require("webpack-node-externals");
const merge = (...objs) => require("deepmerge").all(objs, {arrayMerge: (arr1, arr2) => arr1.concat(arr2) });

const combinedConfig = merge({}, commonConfig, {
	output: {
		path: "./dist",
		libraryTarget: "commonjs2",
		filename: "bundle.js"
	},
	devtool: "#source-map",
	externals: [
		nodeExternals()
	]
});

module.exports = combinedConfig;
