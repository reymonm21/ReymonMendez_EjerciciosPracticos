const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    inlineAssets: true,
    video: true,                  
    screenshotOnRunFailure: true,  
    videosFolder: "cypress/videos",  
    screenshotsFolder: "cypress/screenshots", 
    trashAssetsBeforeRuns: true 
    },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
