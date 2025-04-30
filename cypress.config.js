const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-xml-reporter",
  reporterOptions: {
    resultFolder: "cypress/results",
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-xml-reporter/src/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  },
  env: {
    MAILPIT_URL: "http://localhost:8025",
  },
});
