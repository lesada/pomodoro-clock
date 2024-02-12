module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint-config-lesada"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react"],
};
