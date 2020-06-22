module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:@ionic/recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'eslint-config-airbnb'
  ],
  plugins: [
    '@ionic',
    'eslint-plugin-react',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-import',
    'eslint-plugin-graphql',
    'eslint-plugin-jest',
    'eslint-plugin-unicorn',
    'eslint-plugin-react-hooks',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    semi: 'error',
    'no-debugger': 'warn',
    'no-else-return': 'off',
    'keyword-spacing': 'error',
    'no-confusing-arrow': 'off',
    'quotes': ['error', 'single'],
    'space-before-blocks': 'error',
    'no-negated-condition': 'error',
    'no-underscore-dangle': 'error',
    'eol-last': ['error', 'always'],
    'require-atomic-updates': 'error',
    'arrow-parens': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    'operator-linebreak': ['error', 'after'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-newline': ['error', 'consistent'],
    'quote-props': ['error', 'consistent-as-needed'],
    'object-curly-newline': ['error', { consistent: true }],
    'no-restricted-syntax': ['error', 'ExportAllDeclaration'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
    }],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],

    'react/jsx-no-bind': 'error',
    'react/no-string-refs': 'error',
    'react/jsx-indent': ['error', 2],
    'react/button-has-type': 'error',
    'react/no-children-prop': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/no-did-update-set-state': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/no-access-state-in-setstate': 'error',
    'react/state-in-constructor': ['error', 'never'],
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/static-property-placement': ['error', 'static public field'],
    'react/require-default-props': ['error', { forbidDefaultForRequired: true }],
    'react/sort-prop-types': ['error', {
      sortShapeProp: true,
      requiredFirst: true,
      noSortAlphabetically: true,
    }],
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'instance-variables',
        'static-methods',
        'lifecycle',
        'instance-methods',
        'everything-else',
        'render',
      ],
    }],
    'react/jsx-wrap-multilines': ['error', {
      arrow: 'parens-new-line',
      return: 'parens-new-line',
      assignment: 'parens-new-line',
      declaration: 'parens-new-line',
    }],
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'after-props',
      selfClosing: 'after-props',
    }],

    // 'graphql/template-strings': ['error', { env: 'literal' }],
    // 'graphql/named-operations': ['error', { env: 'literal' }],
    // 'graphql/no-deprecated-fields': ['warn', { env: 'literal' }],
    // 'graphql/capitalized-type-name': ['error', { env: 'literal' }],

    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/prefer-default-export': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/extensions': ['error', {
      ts: 'never',
      tsx: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
    }],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: [
        ['builtin', 'external'],
        ['internal'],
        ['parent', 'sibling', 'index'],
      ],
    }],

    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': ['error', { components: [] }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],

    'jest/expect-expect': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'unicorn/no-nested-ternary': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/filename-case': ['error', {
  		cases: {
        kebabCase: true,
  			pascalCase: true,
  		},
  	}],

    '@typescript-eslint/no-unused-vars': 'error',
  },
};
