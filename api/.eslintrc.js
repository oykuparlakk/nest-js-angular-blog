module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'jest',
    'promise',
    'import',
    'unused-imports',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    //browser: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error', // Error on missing return types
    'class-methods-use-this': 'off', // Error when using class methods without this
    'no-prototype-builtins': 'off', // Error when using hasOwnProperty
    'import/no-extraneous-dependencies': 'off', // Error when importing @ollang/types
    'import/prefer-default-export': 'off', // Error when exporting only one function
    'import/no-default-export': 'error', // Error when exporting default
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'request.**.expect'],
        additionalTestBlockFunctions: [],
      },
    ],
    'import/no-unresolved': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      /*  {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      }, */
      /*  {
        selector: 'default',
        format: ['camelCase'],
      }, */
      {
        selector: [
          'variable',
          'function',
          'parameter',
          'classMethod',
          'classProperty',
        ],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['classProperty'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        modifiers: ['readonly'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        modifiers: ['const', 'global'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: ['class', 'enum', 'typeAlias', 'interface'],
        format: ['PascalCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // Allow CJS until ESM support improves
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['./src/core/generated/entities/*.ts'],
      rules: {
        'import/no-cycle': 'off',
      },
    },
    /* {
      files: ['test/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    }, */
  ],
};
