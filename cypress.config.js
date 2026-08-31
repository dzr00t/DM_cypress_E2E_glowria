const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  // reporter Mochawesome
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",            // dans cypress config
    overwrite: false,
    html: false,
    json: true
  },
  // plugin allure
  env: {
    allure: true,
    allureResultsPath: 'allure-results',
    allureReuseAfterSpec: true,
  },
  e2e: {
    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // plugin tags 
      const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin")
      cypressGrepPlugin(config)

      // plugin allure
      allureWriter(on, config);
      return config


    },
  },
});
