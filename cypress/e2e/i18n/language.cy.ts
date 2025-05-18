describe("Testing browser language settings", () => {
  it.skip("should set the expected locale and timezone", () => {
    cy.log("trying English ...");

    Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setLocaleOverride",
      params: {
        locale: "en-US",
      },
    }).then(() => {
      const date = new Date();
      cy.log(date.toLocaleDateString());
      cy.visit("https://www.apple.com/", {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, "language", {
            value: "en-US",
          });
          console.log(navigator.languages);
        },
      });
      cy.log(navigator.languages.toString());
      cy.contains(/apple/).should("exist");
    });
  });

  it.skip("should set the expected locale and timezone", () => {
    cy.log("trying English ...");

    const date = new Date();
    cy.log(date.toLocaleDateString());
    cy.visit("https://www.apple.com/", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "language", {
          value: "en-US",
        });
        console.log(navigator.languages);
      },
    });
    cy.log(navigator.languages.toString());
    cy.contains(/apple/).should("exist");
  });

  it.skip("should set the expected locale and timezone", () => {
    cy.log("trying German ...");
    Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setLocaleOverride",
      params: {
        locale: "de-DE",
      },
    }).then(() => {
      cy.log(navigator.languages.toString());
      const date = new Date();
      cy.log(date.toLocaleDateString());
      cy.visit("https://www.apple.com/", {
        onBeforeLoad(win) {
          // solution is here
          Object.defineProperty(win.navigator, "languages", {
            value: ["de-DE"],
          });
          console.log(navigator.languages);
        },
      });
      cy.log(navigator.languages.toString());
      cy.contains(/apple/).should("be.visible");
    });
  });

  it.skip("when browser language is English", () => {
    cy.visit("https://www.google.com/", {
      onBeforeLoad(win) {
        // solution is here
        Object.defineProperty(win.navigator, "languages", {
          value: [],
        });
        Object.defineProperty(win.navigator, "languages", {
          value: ["en-US"],
        });
        console.log(navigator.language);
        console.log(navigator.languages);
      },
    });
    cy.visit("https://www.google.com/");
    cy.contains("Google Search");
  });

  it.skip("should set the expected locale and timezone", () => {
    return Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setLocaleOverride",
      params: {
        locale: "en-US",
      },
    })
      .then(() => {
        console.log(navigator.languages.toString());
        const date = new Date();
        console.log(date.toLocaleDateString());
        return Cypress.automation("remote:debugger:protocol", {
          command: "Emulation.setTimezoneOverride",
          params: {
            timezoneId: "Pacific/Fiji",
          },
        });
      })
      .then(() => {
        console.log(navigator.languages.toString());
        const date = new Date();
        console.log(date.toLocaleDateString());
        const { locale, timeZone } =
          new Intl.DateTimeFormat().resolvedOptions();

        console.log(locale, timeZone);
      });
  });
    
    it("Should use the correct locale", () => {
        const date = new Date();
        cy.log(date.toLocaleDateString());
        const { locale, timeZone } =
            new Intl.DateTimeFormat().resolvedOptions();
        cy.log(locale);
        cy.log(timeZone);
    });
});
