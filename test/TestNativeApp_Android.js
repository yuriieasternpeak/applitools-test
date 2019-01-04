'use strict';

const {ConsoleLogHandler} = require('@applitools/eyes.sdk.core');
const {Eyes} = require('@applitools/eyes.webdriverio');
const webdriverio = require('webdriverio');
const {equal} = require('assert');

const appName = 'NativeApp';


let eyes = new Eyes();
let browser;


describe(appName, function () {

  before(function () {
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
    eyes.setLogHandler(new ConsoleLogHandler(true));
  });

  beforeEach(async () => {
    const browserOptions = {
      port: '80',
      path: '/wd/hub',
      host: 'ondemand.saucelabs.com',
      desiredCapabilities: {
        platformName: "Android",
        platformVersion: 6.0,
        deviceName: "Android Emulator",
        app: "https://yuriieasternpeak.github.io/webdriver.io-test-html-pages/app-release.apk",
        appiumVersion: '1.9.1',
        baseUrl: `http://${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:80/wd/hub`,
        username: process.env.SAUCE_USERNAME,
        accesskey: process.env.SAUCE_ACCESS_KEY
      }
    };

    browser = webdriverio.remote(browserOptions);
    await browser.init();
    return eyes.open(browser, 'Android Example', 'Main activity');
  });

  afterEach(function () {
    return eyes.close(false).catch(() => {
      return eyes.abortIfNotClosed();
    }).then(() => {
      return browser.end();
    });
  });


  it('TestCheckWindow', function () {
    return eyes.checkWindow('Window').then(result => {
      equal(result.getAsExpected(), true);
    });
  });
});
