/**
 *
 * PROTRACTOR CONFIG FILE
 *
 * Use this set the details required for Protractor
 *
 * @see http://www.protractortest.org/#/tutorial
 * @see https://github.com/bcaudan/jasmine-spec-reporter/blob/master/examples/protractor/protractor.conf.js
 *
 * @author Mark Rushton < @modernfidelity >
 *
 */

// Set specific items that are required
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let chromeDriverPath = process.platform === './node_modules/chromedriver/bin/chromedriver';


// Main Protractor
exports.config = {
  // chromeDriver: chromeDriverPath,
  // directConnect: true,
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
    // 'chromeOptions': {
    //   args: ['--test-type',  "--headless", "--disable-gpu",] // options for headless  '--headless' , '--disable-gpu'
    // }
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: true
      }
    }));

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: 'tmp/',
      screenshotsFolder: 'images/',
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: true
    }));
  }
};