import importPlugin from 'eslint-plugin-import';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';


export default defineConfig([globalIgnores(['dist/**/*.js']), {
  files: ['**/*.js', '**/*.ts', '**/*.tsx'],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser
    },

    ecmaVersion: 2023,
    sourceType: 'module',

    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      project: './tsconfig.json'
    }
  },

  plugins: {
    import: importPlugin,
    '@typescript-eslint': typescriptEslintPlugin
  },

  rules: {
    'default-case': 'off',
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'always',
      'esm.js': 'always',
      ts: 'never',
      tsx: 'never'
    }]
  }
}]);