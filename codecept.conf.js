exports.config = {
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
    REST: {
      endpoint: "https://www.qa-legacy.com",
      prettyPrintJson: true,
    },
  },
  include: {
    I: "./steps_file.js",
    obituaryPage: "./pages/ObituaryPage.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: "./step_definitions/*steps.js",
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    retryTo: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./tests/*.test.js",
  name: "qa-legacy",
};
