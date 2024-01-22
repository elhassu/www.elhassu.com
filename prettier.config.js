/** @type {import('prettier').Options} */
// https://prettier.io/docs/en/options
// https://prettier.io/docs/en/configuration
// Prettier configuration
module.exports = {
	// Tabs and indentation
	printWidth: 120, // 120 characters per line
	tabWidth: 4, // 4 spaces
	useTabs: true, // Use tabs instead of spaces

	// Formatting
	semi: true, // Use semicolons
	singleQuote: false, // Do not use single quotes
	quoteProps: "consistent", // Only quote properties for consistency (e.g. if one property is quoted, all are)
	jsxSingleQuote: false, // Do not use single quotes in JSX
	trailingComma: "all", // Add trailing commas everywhere
	bracketSpacing: true, // Add spaces between brackets
	bracketSameLine: false, // Put HTML tag brackets on a new line
	jsxBracketSameLine: false, // Put JSX tag brackets on a new line
	arrowParens: "always", // Always include parentheses around arrow function arguments (e.g. (x) => x)
	rangeStart: 0,
	requirePragma: false, // Don't require a comment to format
	insertPragma: false, // Don't insert a comment when formatting
	parser: "babel-flow", // Use Babel parser with Flow support
	htmlWhitespaceSensitivity: "css", // Use CSS rules for HTML whitespace
	endOfLine: "lf", // Use Unix line endings
	embeddedLanguageFormatting: "auto", // Format embedded code (e.g. Prettier inside HTML)
	singleAttributePerLine: true, // Put each JSX attribute on its own line
	configPath: ".config.js", // Use this configuration file
	plugins: ["prettier-plugin-tailwindcss"],
};
