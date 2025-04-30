import { DataTablePage } from "../../support/pages/data-table-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test Tables", () => {
  let homePage: HomePage;
  let dataTablePage: DataTablePage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    dataTablePage = homePage.navigateToDataTablePage();
  });

  it("Should navigate to data table page - via link", () => {
    cy.get("h1").should("contain.text", "Data, Tables & Button States");
  });

  it("Should log the sum of all ages", () => {
    dataTablePage.logSumofAllAges();
  });

  it("Should find a users age in the table and verify it", () => {
    dataTablePage.verifyUsersAgeByLastName("Jackson", 94);
    dataTablePage.verifyUsersAgeByLastName("Woods", 80);
  });
});
