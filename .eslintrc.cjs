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
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|warn|info)$/]",
        "message": "You can only call the error(), warn() and info() methods from the console object"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "assert": "either"
      }
    ],
    "@typescript-eslint/quotes": ["error", "double"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
