import { BasePage } from "./base-page";

export class AutoCompletePage extends BasePage {
  enterFoodName(name: string) {
    cy.get("#myInput").type(name, { delay: 100 });
  }

  selectFoodItem(name: string) {
    const regexp = new RegExp(name, "i");
    cy.get("#myInputautocomplete-list").contains(regexp).click();
    cy.get("#myInput").invoke("prop", "value").should("match", regexp);
    cy.get("#myInputautocomplete-list").should("not.exist");
  }

  submit() {
    cy.get("#myInput").then(($input) => {
      const value = $input.val();
      cy.get("form").submit();
      const regexp = new RegExp(`food-item=${value}$`);
      cy.url().should("match", regexp);
    });
  }

  validateAutoCompleteList(name: string) {
    const regexp = new RegExp(name, "i");
    cy.get("#myInputautocomplete-list").contains(regexp);
  }
}
