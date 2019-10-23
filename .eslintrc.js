module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "quotes": [
      "warn",
      "double"
    ],
    "eqeqeq": 0,
    "no-unused-vars": ["warn"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
