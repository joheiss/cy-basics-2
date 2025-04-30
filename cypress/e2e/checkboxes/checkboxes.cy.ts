import { CheckboxPage } from "../../support/pages/checkbox-page";
import { HomePage } from "../../support/pages/home-page";

describe("Home Page", () => {
  let homePage: HomePage;
  let checkboxPage: CheckboxPage;

  before(() => {
    cy.once("uncaught:exception", () => false);
    homePage = new HomePage();
  });

  beforeEach(() => {
  
    checkboxPage = homePage.navigateToCheckboxPage();
  });

  it("Should navigate to checkbox page - via link", () => {
    cy.get("h1").should(
      "contain.text",
      "Dropdown Menu(s), Checkboxe(s) & Radio Button(s)"
    );
  });
  it("Should check a given checkbox", () => {
    checkboxPage.checkCheckboxByName("Option 1");
    checkboxPage.checkCheckboxByName("Option 4");
    checkboxPage.uncheckCheckboxByIndex(2);
  });

  it("Should check/uncheck a given radio button", () => {
    checkboxPage.checkRadioButtonByName("Orange");
    checkboxPage.checkRadioButtonByName("Yellow");
    checkboxPage.checkRadioButtonByIndex(1);
    checkboxPage.checkRadioButtonByIndex(2);
    checkboxPage.clickRadioButtonByName("Purple");
    checkboxPage.clickRadioButtonByName("Orange");
  });

  it("Should find enabled/disabled radio buttons", () => {
    checkboxPage.verifyRadioButtonIsEnabledByName("Lettuce");
    checkboxPage.verifyRadioButtonIsDisabledByName("Cabbage");
  });

  it("Should select a given value from a dropdown list", () => {
    checkboxPage.selectProgrammingLanguageByName("Python");
    checkboxPage.selectProgrammingToolByIndex(1);
    checkboxPage.selectWebDevToolsByText("CSS");
  });
});
