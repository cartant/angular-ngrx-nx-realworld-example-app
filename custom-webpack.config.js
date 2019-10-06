module.exports = (config, options) => {
  console.log('Loaders configured for', config.module.rules.map(({ test }) => test));
  return config;
};
