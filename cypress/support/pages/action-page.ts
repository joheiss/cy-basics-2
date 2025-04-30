import { BasePage } from "./base-page";

export class ActionPage extends BasePage {
  public dragBox() {
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  }

  public doubleClickBox() {
    cy.get("#double-click").dblclick();
  }

  public clickAndHoldBox() {
    cy.get("#click-box")
      .trigger("mousedown")
      .should("have.css", "background-color", "rgb(0, 255, 0)");
  }
}
