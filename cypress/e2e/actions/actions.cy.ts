import { ActionPage } from "../../support/pages/action-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test Autocomplete Textfield", () => {
  let homePage: HomePage;
  let actionPage: ActionPage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    actionPage = homePage.navigateToActionPage();
  });

  it("Should navigate to action page - via link", () => {
    cy.get("h1").should(
      "contain.text",
      "The Key to Success is to take massive ACTION!"
    );
  });

  it("Should be able to drag a dragable element", () => {
    actionPage.dragBox();
  });

  it("Should double-click a box", () => {
    actionPage.doubleClickBox();
  });

  it("Should be able to hold down the left mouse key on an element", () => {
    actionPage.clickAndHoldBox();
  });
});
