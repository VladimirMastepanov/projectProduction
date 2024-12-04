import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import i18nextPlugin from "eslint-plugin-i18next";

/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["node_modules", "dist"],
    languageOptions: {
      parser: tsParser, // Используем парсер TypeScript
      parserOptions: {
        project: "./tsconfig.json", // Подключение TypeScript проекта
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      "@typescript-eslint": tsPlugin,
      prettier: eslintPrettier,
      i18next: i18nextPlugin,
    },
    rules: {
      ...eslintReact.configs.recommended.rules, // Рекомендации для React
      ...eslintConfigPrettier.rules, // Конфигурация Prettier
      ...tsPlugin.configs.recommended.rules, // Рекомендации для TypeScript
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "error", // Применение правил Prettier
      ...i18nextPlugin.configs.recommended.rules,
      quotes: ["error", "single", { avoidEscape: true }], // Одинарные кавычки с исключением для избегания экранирования
      "prettier/prettier": ["error", { singleQuote: true }], // Правило Prettier для согласованности
    },
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off", // Отключаем проверку строковых литералов в тестах
      "import/no-unresolved": "off",
      code: 120,
    },
  },
];
