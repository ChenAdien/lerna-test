module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:markdown/recommended",
    "google",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        "no-undef": "off",
      },
    },
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "require-jsdoc": [0],
    "no-unused-vars": [0],
    "@typescript-eslint/no-unused-vars": [0],
    "@typescript-eslint/ban-ts-comment": [0],
    "vue/multi-word-component-names": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "max-len": [0],
  },
};
