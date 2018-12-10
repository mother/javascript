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
   parser: "babel-eslint",
   rules: {
      "consistent-return": 1,
      // TODO: Decide on MemberExpression
      "indent": ["error", 3, { "SwitchCase": 1, "MemberExpression": "off" }],
      "semi": ["error", "never"],
      "comma-dangle": ["error", "never"],
      "no-underscore-dangle": 0,
      "no-console": 2,
      "no-param-reassign": ["error", { "props": false }],
      "no-unused-vars": ["error", { "args": "none" }],
      "no-use-before-define": ["error", { "functions": false }],
      "func-names": ["error", "never"],
      "class-methods-use-this": 0,
      "no-multiple-empty-lines": ['error', { max: 1, maxEOF: 1 }],
      "no-use-before-define": ["error", { "functions": false }],
      "max-len": ["error", { "code": 100, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
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
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }]
   }
}
