module.exports = {
  env: {
    browser: true,
    //es2021: true,
    node: true,
    "jest/globals": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks","jest"],
  rules: {
    semi: ["error", "never"],
    "no-var": "error",
    "prefer-const": "error",
    "no-shadow": "error",
    "constructor-super": "error",
    "consistent-return": "error",
    "default-case": "error",
    "dot-notation": "error",
    "func-names": "error",
    "guard-for-in": "error",
    "init-declarations": "error",
    "no-array-constructor": "error",
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-extra-bind": "error",
    "no-implicit-coercion": "error",
    "no-inner-declarations": "error",
    "no-lonely-if": "error",
    "no-multi-str": "error",
    "no-self-compare": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true }
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "object-shorthand": "error",
    "prefer-rest-params": "error",
    "prefer-template": "error",
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    radix: "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-pascal-case": "error",
    "react/no-danger": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "spaced-comment": "error"
  }
}
