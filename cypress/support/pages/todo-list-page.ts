export class TodoListPage {
  public addTodo(todo: string) {
    this.enterTodoText(todo);
    this.clickAddButton();
  }

  public logAllTodos() {
    cy.get("ul>li").each(($item, index, $list) => {
      cy.log(`${index}:${$item.text()}`);
    });
  }

  public completeTodo(todo: string) {
    cy.get("ul>li").each(($item, index, $list) => {
      if ($item.text().includes(todo)) {
        cy.log(`Todo ${todo} found ...`);
        if ($item.hasClass("completed")) {
          cy.log(`Todo ${todo} is already marked as completed`);
        } else {
          cy.wrap($item).click().should("have.class", "completed");
        }
        return false; // break the each loop
      }
    });
  }

  private enterTodoText(todoText: string) {
    cy.get("input[placeholder='Add new todo']")
      .type(todoText)
      .should("have.value", todoText);
  }

  private clickAddButton() {
    cy.get("#plus-icon").click();
  }
}
