import { DatePickerPage } from "../../support/pages/date-picker-page";
import { HomePage } from "../../support/pages/home-page";

describe("Test Date Pickers", () => {
  let homePage: HomePage;
  let datePickerPage: DatePickerPage;

  before(() => {
    homePage = new HomePage();
  });

  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    datePickerPage = homePage.navigateToDatePickerPage();
  });

  it("Should navigate to data table page - via link", () => {
    cy.get("h1").should("contain.text", "Datepicker");
  });

  //   it("Should be able to select a day within a month", () => {
  //     datePickerPage.clickDateInput();
  //     datePickerPage.selectDay(27);
  //   });

  //   it("Should be able to select a month within a year", () => {
  //     datePickerPage.clickDateInput();
  //     datePickerPage.selectMonth(4);
  //   });

  //   it("Should be able to select a year in the future", () => {
  //     datePickerPage.clickDateInput();
  //     datePickerPage.selectYear(2027);
  //   });

  it("Should be able to select a year in the past", () => {
    datePickerPage.clickDateInput();
    datePickerPage.selectYear(2020);
  });

  it("Should select a date in the future", () => {
    const date = new Date(2025, 3, 27);
    datePickerPage.clickDateInput();
    datePickerPage.selectDate(date);
  });

  it("Should select a date in the past", () => {
    const date = new Date(2024, 11, 28);
    datePickerPage.clickDateInput();
    datePickerPage.selectDate(date);
  });
});
