import { ActionPage } from "./action-page";
import { AlertsPage } from "./alerts-page";
import { AutoCompletePage } from "./autocomplete-page";
import { BasePage } from "./base-page";
import { CheckboxPage } from "./checkbox-page";
import { ContactUsPage } from "./contact-us-page";
import { DataTablePage } from "./data-table-page";
import { DatePickerPage } from "./date-picker-page";
import { FileUploadPage } from "./file-upload-page";
import { IFramePage } from "./iframe-page";
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
  private iframePageUrl = `${this.homePageUrl}IFrame/index.html`;
  private checkboxPageUrl = `${this.homePageUrl}Dropdown-Checkboxes-RadioButtons/index.html`;
  private autoCompletePageUrl = `${this.homePageUrl}Autocomplete-TextField/autocomplete-textfield.html`;
  private actionPageUrl = `${this.homePageUrl}Actions/index.html`;
  private dataTablePageUrl = `${this.homePageUrl}Data-Table/index.html`;
  private datePickerPageUrl = `${this.homePageUrl}Datepicker/index.html`;
  private fileUploadPageUrl = `${this.homePageUrl}File-Upload/index.html`;

  public navigateToHomePage() {
    super.navigateTo(this.homePageUrl);
  }

  public navigateToContactUsPage(): ContactUsPage {
    super.navigateTo(this.contactUsPageUrl);
    return new ContactUsPage();
  }

  public navigateToDataTablePage(): DataTablePage {
    super.navigateTo(this.dataTablePageUrl);
    return new DataTablePage();
  }

  public navigateToDatePickerPage(): DatePickerPage {
    super.navigateTo(this.datePickerPageUrl);
    return new DatePickerPage();
  }

  public navigateToFileUploadPage(): FileUploadPage {
    super.navigateTo(this.fileUploadPageUrl);
    return new FileUploadPage();
  }

  public navigateToTodoListPage(): TodoListPage {
    super.navigateTo(this.todoListPageUrl);
    return new TodoListPage();
  }

  public navigateToCheckboxPage(): CheckboxPage {
    super.navigateTo(this.checkboxPageUrl);
    return new CheckboxPage();
  }

  public navigateToLoginPage(): LoginPage {
    super.navigateTo(this.loginPageUrl);
    return new LoginPage();
  }

  public navigateToAlertsPage(): AlertsPage {
    super.navigateTo(this.alertsPageUrl);
    return new AlertsPage();
  }

  public navigateToIFramePage(): IFramePage {
    super.navigateTo(this.iframePageUrl);
    return new IFramePage();
  }

  public navigateToActionPage(): ActionPage {
    super.navigateTo(this.actionPageUrl);
    return new ActionPage();
  }

  public navigateToAutoCompletePage(): AutoCompletePage {
    super.navigateTo(this.autoCompletePageUrl);
    return new AutoCompletePage();
  }

  public navigateToStorePage(): StorePage {
    super.navigateTo(this.storePageUrl);
    return new StorePage();
  }

  public clickActionButton(): ActionPage {
    super.clickNavigationButton("#actions");
    cy.url().should("equal", this.actionPageUrl);
    return new ActionPage();
  }

  public clickContactUsButton(): ContactUsPage {
    super.clickNavigationButton("#contact-us");
    cy.url().should("equal", this.contactUsPageUrl);
    return new ContactUsPage();
  }

  public clickDataTableButton(): DataTablePage {
    super.clickNavigationButton("#data-table");
    cy.url().should("equal", this.dataTablePageUrl);
    return new DataTablePage();
  }

  public clickDatePickerButton(): DatePickerPage {
    super.clickNavigationButton("#datepicker");
    cy.url().should("equal", this.datePickerPageUrl);
    return new DatePickerPage();
  }

  public clickFileUploadButton(): FileUploadPage {
    super.clickNavigationButton("#file-upload");
    cy.url().should("equal", this.fileUploadPageUrl);
    return new FileUploadPage();
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

  public clickDropDownEtcButton(): CheckboxPage {
    super.clickNavigationButton("#dropdown-checkboxes-radiobuttons");
    cy.url().should("equal", this.checkboxPageUrl);
    return new CheckboxPage();
  }
  public clickPopupAndAlertsButton(): AlertsPage {
    super.clickNavigationButton("#popup-alerts");
    cy.url().should("equal", this.alertsPageUrl);
    return new AlertsPage();
  }

  public clickIFrameButton(): IFramePage {
    super.clickNavigationButton("#iframe");
    cy.url().should("equal", this.iframePageUrl);
    return new IFramePage();
  }

  public clickAutoCompleteButton(): AutoCompletePage {
    super.clickNavigationButton("#autocomplete-textfield");
    cy.url().should("equal", this.autoCompletePageUrl);
    return new AutoCompletePage();
  }
}
