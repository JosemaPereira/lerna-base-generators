let karmaBaseConf;

if (process.env.CI_ENV) {
  karmaBaseConf = require('./karma.conf.ci');
} else {
  karmaBaseConf = require('./karma.conf.common');
}

module.exports = karmaBaseConf({
  files: ['src/**/*.ts', 'test/**/*.ts'],
  frameworks: ['karma-typescript'],
  karmaTypescriptConfig: {
    bundlerOptions: {
      transforms: [require('karma-typescript-es6-transform')()]
    },
    compilerOptions: {
      baseUrl: './',
      typeRoots: ['node_modules/@types'],
      target: 'es5',
      module: 'commonjs',
      moduleResolution: 'node',
      declaration: true,
      sourceMap: true,
      inlineSources: true,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      importHelpers: true,
      types: ['jasmine', 'node'],
      lib: ['dom', 'es2017']
    }
  },
  plugins: [require('karma-typescript')],
  preprocessors: {
    'src/**/*.ts': ['karma-typescript'],
    'test/**/*.ts': ['karma-typescript']
  },
  reporters: ['coverage', 'karma-typescript']
});
