const { override, disableEsLint, addBabelPlugin } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = (config, env) => {
  config = override(disableEsLint(),
    addBabelPlugin('styled-components'),
    addBabelPlugin([
      'inline-react-svg',
      {
        ignorePattern: 'desert'
      }
    ]))(config, env);
  config = rewireReactHotLoader(config, env);
  return config;
};
