import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx'],
    plugins: {
      react,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'prettier/prettier': 'error', // Prettier 格式强制为 ESLint 错误
     'padding-line-between-statements': [
        'error',

        // Import 分组
        { blankLine: 'always', prev: 'import', next: 'import' },

        // return 前
        { blankLine: 'always', prev: '*', next: 'return' },

        // 函数声明之间
        { blankLine: 'always', prev: 'function', next: 'function' },

        // 块之间（如 useEffect 后接函数、声明块）
        { blankLine: 'always', prev: 'block', next: 'block' },

        // 变量声明后
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },

        // 连续变量声明之间不强制空行
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      ],
    },
  },
  prettier,
]
