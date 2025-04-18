import { AlertsPage } from "./alerts-page";
import { BasePage } from "./base-page";
import { ContactUsPage } from "./contact-us-page";
import { LoginPage } from "./login-page";
import { Page } from "./page";
import { StorePage } from "./store-page";
import { TodoListPage } from "./todo-list-page";

export class HomePage extends BasePage {
  private homePageUrl = "https://www.webdriveruniversity.com/";
  private contactUsPageUrl = `${this.homePageUrl}Contact-Us/contactus.html`;
  private todoListPageUrl = `${this.homePageUrl}To-Do-List/index.html`;
  private storePageUrl = `https://automationteststore.com/`;
  private loginPageUrl = `${this.homePageUrl}Login-Portal/index.html`;
  private alertsPageUrl = `${this.homePageUrl}Popup-Alerts/index.html`;

  public navigateToHomePage() {
    super.navigateTo(this.homePageUrl);
  }

  public navigateToContactUsPage(): ContactUsPage {
    super.navigateTo(this.contactUsPageUrl);
    return new ContactUsPage();
  }

  public navigateToTodoListPage(): TodoListPage {
    super.navigateTo(this.todoListPageUrl);
    return new TodoListPage();
  }

  public navigateToLoginPage(): LoginPage {
    super.navigateTo(this.loginPageUrl);
    return new LoginPage();
  }

  public navigateToAlertsPage():AlertsPage {
    super.navigateTo(this.alertsPageUrl);
    return new AlertsPage();
  }
  public navigateToStorePage(): StorePage {
    super.navigateTo(this.storePageUrl);
    return new StorePage();
  }

  public clickContactUsButton(): ContactUsPage {
    super.clickNavigationButton("#contact-us");
    cy.url().should("equal", this.contactUsPageUrl);
    return new ContactUsPage();
  }

  public clickLoginPortalButton(): LoginPage {
    super.clickNavigationButton("#login-portal");
    cy.url().should("equal", this.loginPageUrl);
    return new ContactUsPage();
  }

  public clickTodoListButton(): TodoListPage {
    super.clickNavigationButton("#to-do-list");
    cy.url().should("equal", this.todoListPageUrl);
    return new TodoListPage();
  }

  public clickPopupAndAlertsButton(): AlertsPage {
    super.clickNavigationButton("#popup-alerts");
    cy.url().should("equal", this.alertsPageUrl);
    return new AlertsPage();
  }
}
