module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "linebreak-style": ["error", "unix"],
        "require-await": "error",
        "no-warning-comments": [
            1,
            { terms: ["todo", "fixme", "fix"], location: "start" },
        ],
        "no-unused-vars": [1, { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-unused-vars": [1, { argsIgnorePattern: "^_" }],
    },
};