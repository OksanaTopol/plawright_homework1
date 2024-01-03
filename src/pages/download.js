import { commonData } from "../testData/commonData";

export class DownloadPage {

    constructor(page) {
        this.page = page; 
        this.file1 = this.page.locator('a[href="download/bfhRIkF7sV.bin"]'); 
    }

    async gotoDownloadPage() {
        await this.page.goto(commonData.baseURL + commonData.download); 
    }

    async downloadFromPage() {
        await this.file1.click();
    }
}