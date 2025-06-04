import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["./src/generated/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: prettierPlugin,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^@?\\w"],
            ["^@/"],
            ["^\\u0000"],
            ["^\\."],
            ["^\\..*"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          singleQuote: false,
          semi: true,
        },
      ],
      semi: ["error", "always"],
    },
  },
  {
    rules: prettierConfig.rules,
  },
];

export default eslintConfig;
