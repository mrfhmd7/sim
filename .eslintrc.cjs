module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" , ecmaFeatures: { jsx: true,},},
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", 'jsx-a11y'],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // "react/props-types": off,
  },
};