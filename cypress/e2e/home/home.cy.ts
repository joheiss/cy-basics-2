import { HomePage } from "../../support/pages/home-page";
import { StorePage } from "../../support/pages/store-page";

describe("Home Page", () => {
  let homePage: HomePage;
  let storePage: StorePage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    homePage.navigateToHomePage();
  });

  it("Should navigate to store page - via link", () => {
    cy.get("#automation-test-store")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.origin("automationteststore.com", () => {
      cy.get("header a")
        .first()
        .find("img")
        .should("have.attr", "title")
        .and("include", "Automation Test Store");
    });
  });

  it("Should navigate to the correct pages", () => {
    // -- go to contact us page
    homePage.clickContactUsButton();
    // -- go back
    cy.go("back");
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal("/");
    });
    // -- go forward
    cy.go("forward");
    cy.location().should((loc) =>
      expect(loc.pathname).to.match(/contactus.html$/)
    );
    // -- reload current page - with (false) or without using cache (true)
    cy.reload(true);
    cy.location().should((loc) =>
      expect(loc.pathname).to.match(/contactus.html$/)
    );
    // -- navigate to login page
    cy.go("back");
    homePage.clickLoginPortalButton();
    cy.url().should("contain", /Login-Portal/);

    // -- navigate to todo list page
    cy.go("back");
    homePage.clickTodoListButton();
    cy.url().should("contain", /To-Do-List/);

    // -- navigate to popup & alerts page
    cy.go("back");
    homePage.clickPopupAndAlertsButton();
    cy.url().should("contain", /Popup-Alerts/);

    // -- navigate to iframe page
    cy.go("back");
    homePage.clickIFrameButton();
    cy.url().should("contain", /IFrame/);

    // -- navigate to dropdown, checkboxes and radio buttons
    cy.go("back");
    homePage.clickDropDownEtcButton();
    cy.url().should("contain", /Dropdown-Checkboxes-RadioButtons/);

    // -- navigate to actions
    cy.go("back");
    homePage.clickActionButton();
    cy.url().should("contain", /Actions/);

    // -- navigate to data table page
    cy.go("back");
    homePage.clickDataTableButton();
    cy.url().should("contain", /Data-Table/);
  });
});
