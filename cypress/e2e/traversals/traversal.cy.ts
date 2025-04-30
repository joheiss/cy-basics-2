import { DataTablePage } from "../../support/pages/data-table-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test Traversals", () => {
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

  it("Should get the children of a DOM element", () => {
    cy.get("ol.traversal-breadcrumb")
      .children(".active")
      .should("contain.text", "Contact Us");
  });

  it("Should get the closest DOM element", () => {
    cy.get("span.traversal-badge")
      .closest("ul")
      .should("have.class", "list-group");
  });

  it("Should get a list item by index", () => {
    cy.get("ul.traversal-drinks-list li").eq(2).should("have.text", "Milk");
  });

  it("Should filter() the active button", () => {
    cy.get("h2").contains("Buttons & States").scrollIntoView();
    cy.get("div.btn-group-toggle button")
      .filter(".active")
      .should("have.class", "active");
  });

  it("Should find() all 7 pagination links", () => {
    cy.get("h2").contains("Pagination").scrollIntoView();
    cy.get("ul.traversal-pagination")
      .find("li")
      .should("have.length", 7)
      .last()
      .find("a")
      .click();
  });

  it("Should get the first() and last() column of a table row", () => {
    cy.get("h2")
      .contains(/^Table$/)
      .scrollIntoView();
    cy.get("table.traversal-table tbody")
      .find("tr")
      .first()
      .find("td")
      .first()
      .should("have.text", "Andy");
    cy.get("table.traversal-table tbody")
      .find("tr")
      .first()
      .find("td")
      .last()
      .should("have.text", "Otto");
    cy.get("table.traversal-table tbody td")
      //   .find("tbody")
      //   .find("td")
      .should("have.length", 6);
  });

  it("Should get nextAll() siblings of Tea", () => {
    cy.get("h2").contains("Lists").scrollIntoView().should("be.visible");
    cy.get("ul.traversal-drinks-list")
      .find("li#tea")
      .nextAll()
      .should("have.length", 3);
  });
});
