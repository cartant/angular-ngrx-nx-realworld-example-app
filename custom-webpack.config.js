const { createAngularConfigurer } = require('../../dist/transformer');

module.exports = (config, options) => {
  const configurer = createAngularConfigurer({});
  return configurer(config, options);
};
