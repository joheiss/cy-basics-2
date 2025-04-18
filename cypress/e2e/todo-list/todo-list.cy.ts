import { HomePage } from "../../support/pages/home-page";
import { TodoListPage } from "../../support/pages/todo-list-page";

describe("Test Todo List Page", () => {
  let homePage: HomePage;
  let todoListPage: TodoListPage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    todoListPage = homePage.navigateToTodoListPage();
  });

  it("Should log all todo list entries", () => {
    todoListPage.logAllTodos();
  });

  it("Should mark a certain todo as completed", () => {
    todoListPage.completeTodo("Buy new robes");
  });
  it("Should get all the texts from the list items", () => {
    cy.get("ul>li")
      .invoke("text")
      .then((text) => cy.log(text));
  });
});
