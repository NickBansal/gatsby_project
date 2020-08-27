module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: [
		'airbnb'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		'react/jsx-filename-extension': 0,
		'consistent-return': 0,
		'react-hooks/exhaustive-deps': 0,
		'no-tabs': 0,
		'no-plusplus': 0,
		'comma-dangle': ['error', 'never'],
		indent: [2, 'tab'],
		'no-underscore-dangle': 0,
		'jest/no-identical-title': 0,
		'react/jsx-indent': 0,
		'react/no-typos': 0,
		'react/prop-types': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-spreading': 0,
		'no-alert': 1
	}
};
