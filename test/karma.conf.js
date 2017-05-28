module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      "app/resources/js/angular.min.1.6.4.js",
      "app/resources/js/angular-aria.min.1.6.4.js",
      "app/resources/js/angular-animate.min.1.6.4.js",
      "app/resources/js/angular-material.min.1.0.7.js",
      "js/angular.mock.1.6.4.js",
      "app/resources/js/app.js",
      "tests/*.spec.js"
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
