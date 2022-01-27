module.exports = {
   extends: [
      "airbnb"
   ],
   plugins: [
      "react"
   ],
   globals: {
      window: false,
      document: false
   },
   parser: "@babel/eslint-parser",
   parserOptions: {
      ecmaFeatures: { "legacyDecorators": true }
   },
   rules: {
      "class-methods-use-this": 0,
      "comma-dangle": ["error", "never"],
      // TODO: Change the following to error in the near future
      "consistent-return": 1,
      "func-names": ["error", "never"],
      // TODO: Decide on MemberExpression for the following
      "indent": ["error", 3, { "SwitchCase": 1, "MemberExpression": "off" }],
      "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
      "max-len": ["error", { "code": 100, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
      "no-console": 2,
      "no-multiple-empty-lines": ['error', { max: 1, maxEOF: 1 }],
      "no-param-reassign": ["error", { "props": false }],
      "no-underscore-dangle": 0,
      "no-unused-vars": ["error", { "args": "all" }],
      "no-use-before-define": ["error", { "functions": false }],
      "no-use-before-define": ["error", { "functions": false }],
      "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
      "react/destructuring-assignment": 0,
      "react/forbid-prop-types": 1,
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "react/jsx-indent": [1, 3],
      "react/jsx-indent-props": [1, 3],
      "react/jsx-closing-bracket-location": [1, {
         "nonEmpty": "after-props",
         "selfClosing": "tag-aligned"
      }],
      // NOTE: With React 16.3 lifecycle changes, this is no longer applicable
      // "React ensures that any setState calls that happen during componentDidMount and
      // componentDidUpdate are flushed before the user sees the updated UI. In general,
      // it is better to avoid cascading updates like this, but in some cases they are
      // necessary"
      // See: https://github.com/yannickcr/eslint-plugin-react/issues/1754
      "react/no-did-update-set-state": 0,
      // NOTE: This is a bug
      // See: https://github.com/yannickcr/eslint-plugin-react/issues/1773
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
      "semi": ["error", "never"]
   }
}
