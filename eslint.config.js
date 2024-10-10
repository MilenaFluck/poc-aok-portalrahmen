const nx = require('@nx/eslint-plugin');
const path = require('path');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    // Define your custom ESLint plugin
    plugins: {
      // Load your custom plugin located in the tools/eslint-rules directory
      'my-custom-plugin': require(path.resolve(__dirname, 'tools/eslint-rules')),
    },
    rules: {
      // Use your custom rule
      'my-custom-plugin/my-custom-rule': 'error', // or 'warn', 'off'
    },
  },
];
