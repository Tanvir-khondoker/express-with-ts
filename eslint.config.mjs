import globals from "globals";
// import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],

    languageOptions: {
      globals: {
        ...globals.node, // Add Node.js globals
        ...globals.browser,
      },
      parser: tsparser,
      sourceType: "module",
    },

    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      "no-unused-vars": "error",
      "no-console": "warn",
      semi: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-expressions": "error",
      "no-undef": "error",
    },

    ignores: ["dist/**", "node_modules/**"], // Ignore compiled files
  },
];
