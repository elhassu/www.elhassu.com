const routes = [
	{ path: "/", label: "Home", updatedAt: "2024-01-04T00:34:02.934Z" },
	{ path: "/about", label: "About", updatedAt: "2024-01-04T00:34:02.934Z" },
	{
		path: "/experience",
		label: "Experience",
        updatedAt: "2024-01-04T00:34:02.934Z",
		subPaths: [
			{ path: "/buddy-hr", label: "Buddy HR" },
			{ path: "/maze-digital", label: "Maze Digital" },
		],
	},
	{ path: "/projects", label: "Projects", updatedAt: "2024-01-04T00:34:02.934Z" },
];

module.exports = { routes }