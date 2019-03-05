let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// Main Protractor 
exports.config = {
  framework: 'jasmine', // default uses jasmine 2.x
  seleniumAddress: 'http://localhost:4444/wd/hub',
  exclude: ['./node_modules/**'],
  specs: ['./**/*spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
   capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
  }
};