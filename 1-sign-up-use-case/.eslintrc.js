const path = require("path");

module.exports = {
	extends: ["eslint-config-codely/typescript"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: [path.join(__dirname, "tsconfig.json")],
			},
		},
	],
};
