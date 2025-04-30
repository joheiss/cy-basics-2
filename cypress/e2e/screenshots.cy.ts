import { HomePage } from "../support/pages/home-page";

describe("Test*Screenshots*in*Junit*Reports", () => {
  it("Should-link-a-screenshot-as-an-attachment-in-the-XML-file", () => {
    const homePage = new HomePage();
    homePage.navigateToHomePage();
    // -- now trigger an error
    cy.get("#contact-us h1").should("have.text", "CONTACT US");
    cy.get("#contact-us h1").should("have.text", "CONTACT NOBODY");
  });

  it("Should return a single message", () => {
    const messages = [
      {
        ID: 4711,
        text: "Ich bin die erste Nachricht in der Box",
        recipient: "willi",
      },
      {
        ID: 4712,
        text: "Ich bin die zweite Nachricht in der Box",
        recipient: "hansi",
      },
      {
        ID: 4713,
        text: "Ich bin die letzte Nachricht in der Box",
        recipient: "horsti",
      },
    ];
    const messageId = messages
      .filter((m) => m.recipient === "hansi")
      .map((m) => m.ID)
      .at(0);
  });
});
