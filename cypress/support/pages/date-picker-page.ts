import { BasePage } from "./base-page";

export class DatePickerPage extends BasePage {
  private static Months3Chars = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  public clickDateInput() {
    cy.get("#datepicker input[type=text]").click();
  }

  public selectDate(date: Date) {
    this.selectYearAndMonth(date);
    this.selectDay(date);
  }

  // -- click label to reset selection
  public clickSelectDateLabel() {
    cy.get("label").contains("Select Date:").click();
  }
  public selectYear(year: number) {
    cy.get("div.datepicker-days")
      .find("th.datepicker-switch")
      .click({ force: true });
    // get currently displayed year from date picker
    cy.get("div.datepicker-months")
      .find("th.datepicker-switch")
      .invoke("text")
      .then((currYear) => {
        const times = year - Number(currYear);
        if (times > 0) {
          for (let i = 0; i < times; i++) {
            cy.get("div.datepicker-months")
              .find("th.next")
              .click({ force: true });
          }
        } else if (times < 0) {
          cy.log("times: ", times);
          for (let i = times; i < 0; i++) {
            cy.get("div.datepicker-months")
              .find("th.prev")
              .click({ force: true });
          }
        }
      });
    cy.get("div.datepicker-months")
      .find("th.datepicker-switch")
      .should("have.text", year);
  }

  public selectMonth(month: number) {
    const month3Chars = DatePickerPage.Months3Chars[month - 1];
    cy.get("div.datepicker-days")
      .find("th.datepicker-switch")
      .click({ force: true });
    cy.get("div.datepicker-months")
      .find("span.month")
      .contains(month3Chars)
      .click({ force: true });
  }
  public selectDayInMonth(day: number) {
    cy.get("div.datepicker-days")
      .find("td.day")
      .contains(day)
      .should("have.text", day)
      .click({ force: true });
  }

  private selectYearAndMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.toLocaleDateString("en-US", { month: "long" });

    let direction = "none";

    cy.get(".datepicker-dropdown")
      .find(".datepicker-switch")
      .first()
      .then((currentMonthAndYear) => {
        const currentYear = currentMonthAndYear.text().split(" ")[1];
        cy.log(currentYear);
        direction =
          Number(currentYear) === date.getFullYear()
            ? direction
            : Number(currentYear) < date.getFullYear()
            ? "next"
            : "prev";
        cy.log(direction);
        if (!currentMonthAndYear.text().includes(year.toString())) {
          cy.get(`.${direction}`).first().click();
          cy.log(direction + " year clicked");
          this.selectYearAndMonth(date);
        }
      })
      .then(() => {
        cy.get(".datepicker-dropdown")
          .find(".datepicker-switch")
          .first()
          .then((currentMonthAndYear) => {
            cy.log(currentMonthAndYear.text());
            if (!currentMonthAndYear.text().includes(month)) {
              cy.get(`.${direction}`).first().click();
              cy.log(direction + " month clicked");
              this.selectYearAndMonth(date);
            }
          });
      });
  }

  private selectDay(date: Date) {
    const day = date.getDate().toString();
    cy.get("[class=day").contains(day).click();
  }
}
