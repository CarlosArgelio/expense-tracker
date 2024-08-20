import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {ignores: ['eslint.config.mjs']},
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { 
    globals: {
      ...globals.browser, 
      ...globals.node
    }
    },
    rules: {
      "no-console": "warn",
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];