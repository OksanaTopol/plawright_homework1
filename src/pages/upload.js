import { commonData } from "../testData/commonData";

export class UploadPage {

    constructor(page) {
        this.page = page; 
        this.choose = this.page.locator('div#content.large-12.columns'); 
        this.file2 = this.page.locator('a[href="download/bfhRIkF7sV.bin"]'); 
    }

    async gotoUploadPage() {
        await this.page.goto(commonData.baseURL + commonData.upload); 
    }

    async uploadToPage() {
        await this.choose.click();
    }
}