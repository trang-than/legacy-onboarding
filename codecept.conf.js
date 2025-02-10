const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/*.test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://www.qa-legacy.com",
      browser: "chrome",
      capabilities: {
        "goog:chromeOptions": {
          args: [
            "--window-size=1920,1080",
            '--user-agent="LegacyQA/1.0"',
            "--incognito",
          ],
        },
        webSocketUrl: true,
      },
      smartWait: 5000,
      waitForTimeout: 5000,
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
    MSSQLHelper: {
      require: "./custom_helper/MSSQLHelper.js",
    },
  },
  include: {
    I: "./steps_file.js",
    obituaryPage: "./pages/ObituaryPage.js",
  },
  name: "qa-legacy",
};
