module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'jest'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 26,
    },
  },
  ignorePatterns: ['dist/', 'node_modules/', '**/*.css', '**/*.scss'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: '**/*.stories.*',
      rules: {
        'import/no-anonymous-default-export': 'off',
        'testing-library/no-await-sync-query': 'off',
      },
    },
    {
      plugins: ['perfectionist'],
      files: 'packages/lp/src/**/*',
      rules: {
        'import/newline-after-import': 'error',
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              ['type', 'internal-type', 'parent-type', 'sibling-type', 'index-type'],
              ['builtin', 'external'],
              'internal',
              ['parent', 'sibling', 'index', 'side-effect'],
              'style',
              'object',
              'unknown',
            ],
            'internal-pattern': ['@*', '@*/**'],
            'newlines-between': 'always',
            type: 'line-length',
            order: 'asc',
          },
        ],
        'perfectionist/sort-exports': [
          'error',
          {
            type: 'line-length',
            order: 'asc',
          },
        ],
        'perfectionist/sort-named-imports': [
          'error',
          {
            type: 'line-length',
            order: 'asc',
          },
        ],
        'perfectionist/sort-named-exports': [
          'error',
          {
            type: 'line-length',
            order: 'asc',
          },
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            type: 'line-length',
            order: 'asc',
          },
        ],
        'perfectionist/sort-object-types': [
          'error',
          {
            type: 'line-length',
            order: 'asc',
          },
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            type: 'line-length',
            order: 'asc',
          },
        ],
      },
    },
  ],
  rules: {
    // 누락된 종속성 검사 옵션 - 제거 필요
    'react-hooks/exhaustive-deps': 'warn',
    //리액트 hook 규칙 검사 옵션 - 제거 필요
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'warn',
    curly: 'error',
    'testing-library/no-node-access': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'no-restricted-globals': 'off',
    'testing-library/no-unnecessary-act': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'prefer-const': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
