import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import i18nextPlugin from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      parser: tsParser, // Используем парсер TypeScript
      parserOptions: {
        project: './tsconfig.json', // Подключение TypeScript проекта
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      '@typescript-eslint': tsPlugin,
      prettier: eslintPrettier,
      i18next: i18nextPlugin,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier', // Важно, чтобы 'prettier' шел последним
    ],
    rules: {
      ...eslintReact.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      ...tsPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 100,
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-param-reassign': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off', // Отключаем проверку строковых литералов в тестах
      'import/no-unresolved': 'off',
    },
  },
  {
    ignores: ['node_modules', 'dist', 'json-server/index.js'],
  },
];
