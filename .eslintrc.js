module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'max-len': ['warn', { code: 120, ignoreTrailingComments: true }],
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'object-curly-spacing': ['error', 'always'],
    'camelcase': ['off'],
    'indent': ['off'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '&&': 'after', '?': 'before', ':': 'before', '||': 'after' } },
    ],
    'no-invalid-this': ['off']
  }
};
