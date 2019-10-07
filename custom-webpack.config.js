module.exports = (config, options) => {
  console.log('Loaders configured for', config.module.rules.map(({ test }) => test));
  const names = config.plugins.map(plugin => {
    const prototype = Object.getPrototypeOf(plugin);
    if (!prototype) {
      return '?';
    }
    const { constructor } = prototype;
    if (!constructor) {
      return '?';
    }
    return constructor.name || '?';
  });
  const name = 'AngularCompilerPlugin';
  const index = names.indexOf(name);
  if (index === -1) {
    console.warn(`${name} not found`);
    return config;
  }
  const plugin = config.plugins[index];
  const transformers = plugin._transformers;
  if (!transformers) {
    console.warn(`${name}#_transformers not found`);
    return config;
  }
  console.log(`Found ${transformers.length} transformer(s)`);
  // Angular's transformers use the type checker, so it's likely unsafe to
  // insert the tools transformer before them.
  transformers.push(context => sourceFile => {
    console.log(`Transform ${sourceFile.fileName}`);
    return sourceFile;
  });
  return config;
};
