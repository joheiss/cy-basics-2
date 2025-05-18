// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.automation("remote:debugger:protocol", {
  command: "Emulation.setLocaleOverride",
  params: {
    locale: "en-US",
  },
}).then(() => {
  console.log(navigator.languages.toString());
  const date = new Date();
  console.log(date.toLocaleDateString());
  const { locale, timeZone } = new Intl.DateTimeFormat().resolvedOptions();

  console.log(locale, timeZone);
});
