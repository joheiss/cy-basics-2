import { Page } from "./page";

export abstract class BasePage implements Page {
  navigateTo(url) {
    cy.visit(url);
    cy.url().should("equal", url);
  }

  clickNavigationButton(locator: string) {
    cy.get(locator)
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  }
}
