module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai'],
      files: ['src/**/*.js','test/**/*.js'],
      reporters: ['progress'],
      port: 9876,  // karma web server port
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      // singleRun: false, // Karma captures browsers, runs the tests and exits
      concurrency: Infinity,
      browsers: ['Chrome', 'ChromeHeadless', 'MyHeadlessChrome'],
      customLaunchers: {
        MyHeadlessChrome: {
          base: 'ChromeHeadless',
          flags: ['--disable-translate', '--disable-extensions', '--remote-debugging-port=9223']
        }
      }
    })
  }