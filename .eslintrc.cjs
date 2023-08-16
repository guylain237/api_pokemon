module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    `plugin:react/jsx-runtime`,
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [],
  ignorePatterns: ["vite.config.js", "dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/quotes": ["error", "prefer-double"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
