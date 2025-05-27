import importPlugin from 'eslint-plugin-import';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([globalIgnores(['dist/**/*.js']), {
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser
    },

    ecmaVersion: 2023,
    sourceType: 'module',

    parser: '@typescript-eslint/parser'
  },

  plugins: {
    import: importPlugin,
    '@typescript-eslint': typescriptEslintPlugin
  },

  rules: {
    'default-case': 'off',

    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'always',
      'esm.js': 'always',
      ts: 'never',
      tsx: 'never'
    }]
  }
}]);