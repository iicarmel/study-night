import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/shuffle.js", "src/utilityRenderFunctions.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-var": "error",
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      "no-console": "warn",
    },
  },
];