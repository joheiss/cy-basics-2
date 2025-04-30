import { AutoCompletePage } from "../../support/pages/autocomplete-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test Autocomplete Textfield", () => {
  let homePage: HomePage;
  let autoCompletePage: AutoCompletePage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    autoCompletePage = homePage.navigateToAutoCompletePage();
  });

  it("Should navigate to autocomplete page - via link", () => {
    cy.get("h2").should("contain.text", "Autocomplete TextField");
  });

  it("Should display a valid selection of items", () => {
    Cypress.Keyboard.defaults({
      keystrokeDelay: 0,
    });
    autoCompletePage.enterFoodName("app");
      autoCompletePage.selectFoodItem("Apple");
      autoCompletePage.submit();
  });
});
