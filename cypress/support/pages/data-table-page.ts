import { BasePage } from "./base-page";

export class DataTablePage extends BasePage {
  public logSumofAllAges() {
    cy.get("h1").scrollIntoView().should("be.visible");

    let sum = 0;
    cy.get("#thumbnail-1 tr")
      .each(($row, index, $list) => {
        if (index != 0 && index != 4) {
          return cy
            .wrap($row)
            .find("td")
            .last()
            .invoke("text")
            .then((value) => {
              cy.log(value);
              sum += Number(value);
            });
        }
      })
      .then(() => cy.log(sum.toString()));
  }

  public verifyUsersAgeByLastName(name: string, age: number) {
    cy.get("#thumbnail-1 tr td:nth-child(2)")
      .contains(name)
      .siblings()
      .last()
      .should("have.text", age);
  }
}
