module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'color-no-invalid-hex': true,
  },
};
