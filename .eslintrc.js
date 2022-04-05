module.exports = {
  extends: ['@antfu'],
  rules: {
    'no-console': 0,
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'curly': [2, 'all'],
  },
}
