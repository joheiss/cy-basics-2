import { faker } from "@faker-js/faker";

describe("Testing with Mailpit", () => {
  const emails: string[] = [];

  it("Should create an email and send it to mailpit", () => {
    for (let i = 0; i < 5; i++) {
      emails.push(faker.internet.email());
      cy.mailpitSendMail({
        to: [{ Email: emails[i], Name: "Hansi Hampelmann" }],
        subject: "Änderung ihrer privaten Email-Adresse", // + faker.person.firstName(),
        textBody: "Test message",
      }).should("have.property", "ID");
    }
  });

  it("Should find a mail by recipient and subject", () => {
    const subject = "Änderung ihrer privaten Email-Adresse";
    const recipient = emails[0];
    const query = `subject:"${subject}" to:${recipient}`;
    const start = 0;
    const limit = 1;
    cy.mailpitSearchEmails(query, start, limit).then((response) => {
      console.log(response);
      expect(response.messages.length).to.equal(1);
    });
  });

  it("Should find a mail by recipient and subject - using the mailpit API", () => {
    const subject = "Änderung ihrer privaten Email-Adresse";
    const recipient = emails[1];
    const query = `subject: ${subject}, to: ${recipient}`;
    const start = 0;
    const limit = 1;
    cy.request(
      `http://localhost:8025/api/v1/search?query=${query}&start=${start}$limit=${limit}`
    ).then((response) => {
      console.log(response);
      expect;
    });
  });
});
