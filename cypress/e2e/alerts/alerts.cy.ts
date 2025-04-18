import { AlertsPage } from "../../support/pages/alerts-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test Alerts", () => {
  let homePage: HomePage;
  let alertsPage: AlertsPage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    alertsPage = homePage.navigateToAlertsPage();
  });

  it("Should show an alert box", () => {
    alertsPage.verifyAlertWasDisplayed();
  });

  it("Should show a confirm box and confirm it with OK", () => {
    alertsPage.verifyConfirmWasDisplayedAndConfirmedWithOK();
  });

  it("Should show a confirm box and confirm it with CANCEL", () => {
    alertsPage.verifyConfirmWasDisplayedAndConfirmedWithCancel();
  });
});
