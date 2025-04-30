import { BasePage } from "./base-page";

export class FileUploadPage extends BasePage {

    public selectFile(filePath: string) {
        cy.get("#myFile").selectFile(filePath);
    }

    public clickSubmitButton() {
        cy.get("#submit-button").click();
    }
}
