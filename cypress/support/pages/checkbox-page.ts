import { BasePage } from "./base-page";

export class CheckboxPage extends BasePage {
  public checkCheckboxByName(option: string) {
    const value = option.toLowerCase().replace(" ", "-");
    cy.get("input[type=checkbox]").check(value).should("be.checked");
  }

  public checkCheckboxByIndex(index: number) {
    cy.get("input[type=checkbox]").eq(index).check().should("be.checked");
  }

  public uncheckCheckboxByName(option: string) {
    const value = option.toLowerCase().replace(" ", "-");
    cy.get("input[type=checkbox]").uncheck(value).should("not.be.checked");
  }

  public uncheckCheckboxByIndex(index: number) {
    cy.get("input[type=checkbox]").eq(index).uncheck().should("not.be.checked");
  }

  public checkRadioButtonByName(name: string) {
    const value = name.toLowerCase().replace(" ", "-");
    cy.get("#radio-buttons")
      .find("input[type=radio]")
      .check(value)
      .should("be.checked");
  }

  public clickRadioButtonByName(name: string) {
    const value = name.toLowerCase().replace(" ", "-");
    cy.get("#radio-buttons")
      .find(`input[type=radio][value="${value}"]`)
      .then(($radiobutton) => {
        if ($radiobutton.prop("checked", false)) {
          cy.wrap($radiobutton).click().should("be.checked");
        } else {
          cy.wrap($radiobutton).click().should("not.be.checked");
        }
      });
  }

  public checkRadioButtonByIndex(index: number) {
    cy.get("#radio-buttons")
      .find("input[type=radio]")
      .eq(index)
      .check()
      .should("be.checked");
  }

  public clickRadioButtonByNIndex(index: number) {
    cy.get("#radio-buttons")
      .find("input[type=radio]")
      .eq(index)
      .click()
      .should("be.checked");
  }

  public verifyRadioButtonIsEnabledByName(name: string) {
    const value = name.toLowerCase();
    cy.get("#radio-buttons-selected-disabled")
      .find(`input[type=radio][value="${value}"]:not([disabled])`)
      .should("not.be.disabled");
  }

  public verifyRadioButtonIsDisabledByName(name: string) {
    const value = name.toLowerCase();
    cy.get("#radio-buttons-selected-disabled")
      .find(`input[type=radio][value="${value}"][disabled]`)
      .should("be.disabled");
  }

  public selectProgrammingLanguageByName(name: string) {
    const value = name.toLowerCase();
    cy.get("#dropdowm-menu-1").select(value).should("have.value", value);
  }

  public selectProgrammingToolByIndex(index: number) {
    cy.get("#dropdowm-menu-2").select(index);
    cy.get(`#dropdowm-menu-2 option`).eq(index).should("be.selected");
  }

  public selectWebDevToolsByText(text: string) {
    cy.get("#dropdowm-menu-3").select(text).contains(text);
  }
}
