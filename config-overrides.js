const { override, disableEsLint, addBabelPlugin } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addBabelPlugin('styled-components'),
  addBabelPlugin([
    'inline-react-svg',
    {
      ignorePattern: 'desert'
    }
  ])
);
