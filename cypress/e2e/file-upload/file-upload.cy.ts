import { FileUploadPage } from "../../support/pages/file-upload-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test File Upload", () => {
  let homePage: HomePage;
  let fileUploadPage: FileUploadPage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    fileUploadPage = homePage.navigateToFileUploadPage();
  });

  it("Should navigate to file upload page - via link", () => {
    cy.get("h1").should("contain.text", "File Upload");
  });

  it("Should upload a file", () => {
    fileUploadPage.selectFile(
      "cypress/fixtures/jovisco_nur_logo_klein_transparent.png"
    );
    fileUploadPage.clickSubmitButton();
  });

  it("Should not upload a file", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    fileUploadPage.clickSubmitButton();

    // wait for the event to be handled
    cy.then(() => {
      expect(stub.getCall(0)).to.be.calledWith(
        "You need to select a file to upload!"
      );
    });
  });
});
