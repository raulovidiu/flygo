'use strict';

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


module.exports.config = {
  framework: 'jasmine2',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // If Node.js version is greater than version 7.0 use the belog flag;
  // otherwise, remove the setting.
  useBlockingProxy: false,

  specs: ['./specs/create-random-account.spec.js'],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--disable-infobars']
    }
  },

  params: {
    'baseUrl': 'https://www.fly-go.ro/'
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true;

    browser.driver.manage().window().setSize(1400, 900);
    browser.driver.manage().window().maximize();

    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displayPendingSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true,
      colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
      },
      prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
      }
    }));

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      takeScreenshots: true,
      // takeScreenshotsOnlyOnFailures: true,
      fixedScreenshotName: true,
      savePath: './reports/',
      screenshotsFolder: './screenshots'
    }));

    jasmine.getEnv().addReporter({
      specDone: function (spec) {
        if (spec.status === 'failed') {
          console.dir(spec.failedExpectations.length);
          console.log(spec.failedExpectations[0].message);
          console.log(spec.failedExpectations[0].stack);
          //browser.pause();
        }
      }
    });
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 90000, // wait time in ms before test fails
    print: function () { } // to print Jasmine results
  }
};
