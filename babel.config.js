module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'];
  const plugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@icons': './src/icons',
          '@images': './src/images',
          '@modules': './src/modules',
          '@routes': './src/routes',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@utils': './src/utils'
        }
      }
    ]
  ];

  return {
    env: {
      production: {
        presets,
        plugins
      },
      development: {
        presets,
        plugins
      },
      test: {}
    }
  };
};
