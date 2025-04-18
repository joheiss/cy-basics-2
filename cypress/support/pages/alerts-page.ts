import { BasePage } from "./base-page";

export class AlertsPage extends BasePage {
  public clickAlertButton() {
    return cy.get("#button1").click();
  }

  public clickConfirmButton() {
    return cy.get("#button4").click();
  }
  public verifyAlertWasDisplayed() {
    const stub = cy.stub();
    cy.on("window:alert", stub);
    this.clickAlertButton().then(() => {
      expect(stub.getCall(0)).to.be.calledWith("I am an alert box!");
    });
  }

  public verifyConfirmWasDisplayedAndConfirmedWithOK() {
    const stub = cy.stub().returns(true); // simulate OK on confirm
    cy.on("window:confirm", stub);
    this.clickConfirmButton().then(() => {
      expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      cy.get("#confirm-alert-text").should("contain.text", "You pressed OK!");
    });
  }

  public verifyConfirmWasDisplayedAndConfirmedWithCancel() {
    const stub = cy.stub().returns(false); // simulate CANCEL on confirm
    cy.on("window:confirm", stub);
    this.clickConfirmButton().then(() => {
      expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      cy.get("#confirm-alert-text").should(
        "contain.text",
        "You pressed Cancel!"
      );
    });
  }
}
