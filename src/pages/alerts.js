import { commonData } from "../testData/commonData";

export class AlertsPage {

    constructor(page) {
        this.page = page; 
        this.alert = this.page.locator('button:has-text("Click for JS Alert")')
        this.confirm = this.page.locator('button:has-text("Click for JS Confirm")')
        this.propmt = this.page.locator('button:has-text("Click for JS Prompt")')

        this.confirmMessage = this.page.locator('button:has-text("Click for JS Confirm")')
        this.propmtMessage = this.page.locator('button:has-text("Click for JS Prompt")')
    }

    async gotoJsAlerts() {
        await this.page.goto(commonData.baseURL + commonData.jsAlerts); 
    }

    async clickForAlert() {
        await this.alert.click();
    }
    async clickForConfirm() {
        await this.confirm.click();
       // await this.on('dialog');
    }
    async clickForPrompt() {
        await this.propmt.click();
        await this.on('dialog');
    }
}