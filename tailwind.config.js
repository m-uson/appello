module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			colors: {
				"c-0E": "#0E0E33",
				"c-0A": "#0A8BFE",
				"c-73": "#737373",
				"c-E8": "#E8E8E8",
				"c-88": "#888888",
				"c-32": "#323232",
			},
		},
		screens: {
			xl: { max: "1200px" },
			lg: { max: "1024px" },
			md: { max: "768px" },
			sm: { max: "640px" },
			mos: { max: "425px" },
			mo: { max: "375px" },
		},
		container: {
			padding: "10px",
			overflow: "hidden",
			center: true,
		},
	},
	plugins: [],
};
