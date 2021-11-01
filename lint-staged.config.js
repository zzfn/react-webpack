module.exports = {
  '*.{js,ts}': 'eslint --fix',
  '*.(scss|css)': 'stylelint --fix',
  '*': 'prettier --write',
};
