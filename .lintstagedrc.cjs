module.exports = {
  '*.js': ['eslint --fix', 'prettier --write'],
  'package.json': ['prettier-package-json --write'],
};
