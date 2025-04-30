import { BasePage } from "./base-page";

export class IFramePage extends BasePage {
  private iframe: Cypress.Chainable<any>;

  constructor() {
    super();
    this.wrapIFrame().then((iframe) => (this.iframe = iframe));
  }

  public navigateToIFrame() {
    cy.visit(
      "https://www.webdriveruniversity.com/Page-Object-Model/index.html"
    );
  }

  public clickFindOutMoreButton() {
    cy.get("@iframe").within(() => {
      cy.get("#button-find-out-more").click();
      cy.get("#myModal").should("be.visible");
      cy.get("#myModal").contains(/Welcome to webdriveruniversity.com/);
    });
  }

  public clickCloseButtonOnModal() {
    cy.get("@iframe").within(() => {
      cy.get("#myModal").find("button").contains("Close").click();
      cy.get("#myModal").should("not.be.visible");
    });
  }

  public clickFindOutMoreButtonOnModal() {
    cy.get("@iframe").within(() => {
      cy.get("#myModal")
        .find("button")
        .contains(/find out more/i)
        .click();
      cy.get("#myModal").should("not.be.visible");
    });
  }

  public wrapIFrame(): Cypress.Chainable<any> {
    return cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe", { type: "static" });
      return cy.get("@iframe");
    });
  }
}
