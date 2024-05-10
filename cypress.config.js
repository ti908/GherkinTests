
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  //require('cypress-mochawesome-reporter/plugin')(on);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  
  //reporter: 'cypress-mochawesome-reporter',

  defaultCommandTimeout: 6000,
  env: {
    url: "https://qa-challenge.codesubmit.io/",
  },
  projectId: "5h4bez",
  e2e: {
    retries: {runMode:1, openMode:1},
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature'

  },
});
