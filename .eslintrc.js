module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-typescript/base"],
  rules: {
    "import/extensions": "off",
    "import/prefer-default-export": "off"
  },
};
