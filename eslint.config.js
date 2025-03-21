import js from '@eslint/js'
import { FlatCompat } from 'eslint-config-flat-migrate'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import ReactPlugin from 'eslint-plugin-react-refresh'
import HooksPlugin from 'eslint-plugin-react-hooks'
import PrettierPlugin from 'eslint-plugin-prettier'

const compat = new FlatCompat()

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': ReactPlugin,
      'prettier': PrettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
  ...compat.config({
    extends: ['plugin:react-hooks/recommended'],
  }),
)
