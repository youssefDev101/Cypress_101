const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "junit",
    reporterOptions: {
      mochaFile: "reporting/demo_[hash].xml",
      toConsole: true,
      attachments: true,
    },
    video: false,
  },
});
