module.exports = {
  '*.{js,ts,tsx}': 'eslint --fix',
  '*.(scss|css)': 'stylelint --fix',
  '*.{js,ts,tsx,scss,css}': 'prettier --write',
};
