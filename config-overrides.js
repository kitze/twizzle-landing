const {
  override,
  disableEsLint,
  addBabelPlugin
} = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addBabelPlugin('emotion'),
  addBabelPlugin([
    'inline-react-svg',
    {
      ignorePattern: 'desert'
    }
  ])
);
