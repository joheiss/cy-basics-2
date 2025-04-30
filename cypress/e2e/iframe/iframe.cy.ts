import { HomePage } from "../../support/pages/home-page";
import { IFramePage } from "../../support/pages/iframe-page";

describe("Test IFrames", () => {
  let homePage: HomePage;
  let iframePage: IFramePage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    iframePage = homePage.navigateToIFramePage();
  });

  it("Should handle an iframe element", () => {
    iframePage.clickFindOutMoreButton();
    iframePage.clickFindOutMoreButtonOnModal();
    // iframePage.wrapIFrame().within(() => {
    //   cy.get("#button-find-out-more").click();
    //   cy.get("#myModal").should("be.visible");
    //   cy.get("#myModal").contains(/Welcome to webdriveruniversity.com/);
    //   cy.get("#myModal")
    //     .find("button")
    //     .contains(/find out more/i)
    //     .click();
    //   cy.get("#myModal").should("not.be.visible");
    // });
  });
});
