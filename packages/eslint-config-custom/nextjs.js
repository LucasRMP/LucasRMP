/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'eslint-plugin-import-helpers', '@typescript-eslint'],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
  rules: {
    ...require('./base-rules'),
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/display-name': 'off',
    'no-unused-expressions': 'error',
    'no-param-reassign': 'error',
    eqeqeq: 'error',
    'no-nested-ternary': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-debugger': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@rmp/*/',
          '/^(components|hooks|styles|__tests__)/',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
    'jest/expect-expect': 'off',
    'testing-library/no-node-access': 'off',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
        'jest/expect-expect': 'off',
        'testing-library/no-node-access': 'off',
      },
    },
  ],
}
