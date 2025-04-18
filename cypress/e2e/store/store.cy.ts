import { HomePage } from "../../support/pages/home-page";
import { StorePage } from "../../support/pages/store-page";

describe("Test Store Page", () => {
  let homePage: HomePage;
  let storePage: StorePage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    storePage = homePage.navigateToStorePage();
  });

  it("Should show store page", () => {
    cy.get("header a")
      .first()
      .find("img")
      .should("have.attr", "title")
      .and("include", "Automation Test Store");
  });
});
