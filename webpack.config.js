const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/images/[name].[contentcash][ext]",
				},
			},
			{
				test: /\.svg$/,
				type: "asset/resource",
				generator: {
					filename: "assets/images/icons/[name].[contentcash][ext]",
				},
			},
			{
				test: /\.pug$/,
				loader: "pug-loader",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name][ext]",
				},
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/,
				generator: {
					filename: "js/script[ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "index.html"),
			filename: "index.html",
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ["dist"],
				},
			},
		}),
		new MiniCssExtractPlugin({
			filename: "assets/css/[name].css",
		}),
	],

	devServer: {
		watchFiles: path.resolve(__dirname, "src"),
		port: 3000,
		host: "localhost",
		hot: false,
		open: true,
		client: {
			overlay: true,
		},
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["gifsicle", { interlaced: true }],
							["jpegtran", { progressive: true }],
							["optipng", { optimizationLevel: 5 }],
							["svgo", { name: "preset-default" }],
						],
					},
				},
			}),
		],
	},
};
