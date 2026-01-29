module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.vue', '**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
