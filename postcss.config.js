module.exports = {
	plugins: {
		"postcss-preset-env": {
			browsers: "last 2 versions",
		},
	},
	plugins: [
		require("tailwindcss"),
		require("./tailwind.config.js"),
		require("autoprefixer"),
	],
};
