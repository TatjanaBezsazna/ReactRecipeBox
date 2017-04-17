var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome', 'Chrome_without_security'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['node_modules/jquery/dist/jquery.min.js',
		'node_modules/foundation-sites/dist/foundation.min.js','app/tests/**/*.test.jsx'],
    preprocessors:  {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']

    },
    // you can define custom flags
    customLaunchers: {
  Chrome_without_security: {
    base: 'Chrome',
    flags: ['--disable-web-security']
  }
},
    reporters: ['mocha'],
    client: {
      mocha: {
          timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });


};