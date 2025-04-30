import { faker } from "@faker-js/faker";

describe("Testing with Mailpit", () => {
  it("Should create an email and send it to mailpit", () => {
    for (let i = 0; i < 5; i++) {
      cy.mailpitSendMail({
        to: [{ Email: faker.internet.email(), Name: "Hansi Hampelmann" }],
        subject: "Hello all", // + faker.person.firstName(),
        textBody: "Test message",
      }).should("have.property", "ID");
    }
  });

  it("Should find a mail by recipient and subject", () => {
    cy.mailpitSearchEmails(
      "subject: Hello all, to: Anastacio43@gmail.com"
    ).then((response) => {
      console.log(response);
    });
  });
});
