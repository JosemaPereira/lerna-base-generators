module.exports = (mixConfig, overrideConfig) => config => {
  config.set(
    Object.assign(
      {},
      mixConfig,
      {
        browsers: ['Chrome'],
        client: {
          clearContext: false
        },
        colors: true,
        frameworks: ['jasmine', ...mixConfig.frameworks],
        plugins: [
          require('karma-chrome-launcher'),
          require('karma-coverage'),
          require('karma-jasmine'),
          ...mixConfig.plugins
        ],
        reporters: ['progress', ...mixConfig.reporters],
        singleRun: true
      },
      overrideConfig
    )
  );
};
