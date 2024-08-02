module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'perfectionist'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	root: true,
	env: {
		node: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'perfectionist/sort-maps': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-enums': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-exports': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-classes': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-objects': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-jsx-props': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-interfaces': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-union-types': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-object-types': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-named-imports': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-named-exports': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-array-includes': ['error', { type: 'line-length', order: 'asc' }],
		'perfectionist/sort-imports': [
			'error',
			{
				type: 'line-length',
				order: 'asc',
				groups: ['type', ['react', 'builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
				'newlines-between': 'always'
			}
		]
	}
};
