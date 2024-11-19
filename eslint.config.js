import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules", // 忽略 `node_modules` 文件夹
      "**/dist", // 忽略 `dist` 文件夹
    ],
  },
  { files: ["**/*.{ts,tsx}"] },
  {
    plugins: {
      pluginReact,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "no-shadow": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-underscore-dangle": "off",
      "no-use-before-define": "off",
      "max-len": "off",
    },
  },
];
