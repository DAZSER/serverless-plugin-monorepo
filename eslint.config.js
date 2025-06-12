import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier/flat';

const config = tseslint.config(
  {
    name: 'Ignores',
    ignores: ['node_modules', 'lib', 'coverage'],
  },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js', 'prettier.config.js'],
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
);

export default config;
