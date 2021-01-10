module.exports = {
  env: {
    es6: true,
    es2020: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "max-len": [
      "error", {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {selector: "default", format: ["camelCase"]},
      {selector: "variableLike", format: ["camelCase"]},
      {selector: "variable", format: ["camelCase"]},
      {selector: "parameter", format: ["camelCase"]},
      {selector: "memberLike", format: ["camelCase"]},
      {selector: "typeLike", format: ["PascalCase"]},
      {selector: "typeParameter", format: ["PascalCase"]},
      {selector: "enumMember", format: ["PascalCase"]},
    ],
    "no-multi-spaces": "error",
    "eol-last": ["error", "always"],
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "no-return-assign": "warn"
  }
};
