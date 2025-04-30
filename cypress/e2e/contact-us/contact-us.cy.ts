import { ContactData } from "../../support/domain/contact-data";
import { ContactUsPage } from "../../support/pages/contact-us-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test Contact Us form via WebDriverUni", () => {
  let homePage: HomePage;
  let contactUsPage: ContactUsPage;

  let contactData: ContactData;

  before(() => {
    cy.fixture("contact.json").then((contact) => (contactData = contact));
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    contactUsPage = homePage.navigateToContactUsPage();
  });

  it("Should contain a specific set of metadata on the page", () => {
    cy.document().should("have.property", "charset").and("equal", "UTF-8");
  });

  it("Should contain a specific page title", () => {
    cy.title()
      .should("match", /contact us/i)
      .and("include", "WebDriver");
  });

  it("Should be able to successfully submit the Contact Us form", () => {
    contactUsPage.fillOutForm(contactData);
    // contactUsPage.clickSubmitButton();
    contactUsPage.submitForm();
    cy.url().should("match", /contact-form-thank-you.html$/);
    contactUsPage.validateSuccessfulSubmit();
  });

  it("Should not be able to submit the Contact Us form as required fields are missing", () => {
    const incompleteData = { ...contactData, email: undefined };
    contactUsPage.fillOutForm(incompleteData);
    contactUsPage.submitForm();
    contactUsPage.validateUnSuccessfulSubmit();
  });

  it("Should reset the form if the RESET button is pressed", () => {
    contactUsPage.fillOutForm(contactData);
    contactUsPage.clickResetButton();
    contactUsPage.validateFormIsEmpty();
  });

  it("Should log all todos on Todo List page", () => {});
});
