module.exports = (config, options) => {
  console.log('Loaders configured for', config.module.rules.map(({ test }) => test));
  console.log('Plugins', config.plugins.map(plugin => {
    const prototype = Object.getPrototypeOf(plugin);
    if (!prototype) {
      return '?';
    }
    const { constructor } = prototype;
    if (!constructor) {
      return '?';
    }
    return constructor.name || '?';
  }));
  return config;
};
