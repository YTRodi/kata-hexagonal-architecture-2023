const path = require("path");

module.exports = {
	extends: ["eslint-config-codely/typescript"],
	rules: {
		"@typescript-eslint/unbound-method": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-unsafe-argument": "off",
		"@typescript-eslint/require-await": "off",
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: [path.join(__dirname, "tsconfig.json")],
			},
		},
	],
};
