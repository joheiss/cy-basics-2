import { ContactData } from "../domain/contact-data";
import { BasePage } from "./base-page";

export class ContactUsPage extends BasePage {
  public fillOutForm(contactData: ContactData) {
    if (contactData.firstName) this.enterFirstName(contactData.firstName);
    if (contactData.lastName) this.enterLastName(contactData.lastName);
    if (contactData.email) this.enterEmailAddress(contactData.email);
    if (contactData.comment) this.enterComment(contactData.comment);
  }

  enterFirstName(firstName: string) {
    cy.get("input[name=first_name]")
      .type(firstName)
      .should("have.value", firstName);
  }

  enterLastName(lastName: string) {
    cy.get("input[name=last_name]")
      .type(lastName)
      .should("have.value", lastName);
  }

  enterEmailAddress(email: string) {
    cy.get("input[name=email]").type(email).should("have.value", email);
  }

  enterComment(comment: string) {
    cy.get("textarea[name=message]")
      .type(comment)
      .should("have.value", comment);
  }

  clickResetButton() {
    cy.get("input[type=reset]").click({ force: true });
  }

  clickSubmitButton() {
    cy.get("input[type=submit]").click({ force: true });
  }

  submitForm() {
    cy.get("#contact_form").submit();
  }

  validateSuccessfulSubmit() {
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }

  validateUnSuccessfulSubmit() {
    cy.get("body").should("contain", "Error:");
  }

  validateFormIsEmpty() {
    cy.get("input[name=first_name]").should("not.have.value");
    cy.get("input[name=last_name]").should("not.have.value");
    cy.get("input[name=email]").should("not.have.value");
    cy.get("textarea[name=message]").should("not.have.value");
  }
}
