module.exports = {
   extends: [
      "airbnb"
   ],
   plugins: [
      "react"
   ],
   installedESLint: true,
   globals: {
      window: false,
      document: false
   },
   parser: 'babel-eslint',
   rules: {
      "no-octal-escape": 0,
      "consistent-return": 0,
      "indent": ["error", 3],
      "semi": ["error", "never"],
      "comma-dangle": ["error", "never"],
      "no-underscore-dangle": 0,
      "no-console": 2,
      "no-param-reassign": ["error", { "props": false }],
      "no-unused-vars": ["error", { "args": "none" }],
      "func-names": ["error", "never"],
      "class-methods-use-this": 0,
      "no-multiple-empty-lines": ['error', { max: 1, maxEOF: 1 }],
      "max-len": ["error", { "code": 100, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "react/jsx-indent": [1, 3],
      "react/jsx-indent-props": [1, 3],
      "react/jsx-closing-bracket-location": [1, {
         "nonEmpty": "after-props",
         "selfClosing": "tag-aligned"
      }],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }]
   }
}
