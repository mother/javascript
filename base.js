module.exports = {
  extends: [
    "eslint-config-airbnb/base",
    "eslint-config-mother/rules/style",
    "eslint-config-mother/rules/es6",
  ].map(require.resolve),
  parser: require.resolve("babel-eslint")
};
