import { test, expect } from '@playwright/test';
import { DownloadPage } from '../src/pages/download';
import { commonData } from '../src/testData/commonData';


test.describe(`Heroku Download Suite` , () => {

    let downloadPage; 

    test.beforeEach(async ({page}) => {
        downloadPage = new DownloadPage(page); 
        await downloadPage.gotoDownloadPage(); 
    })
    test('should download successfully', async ({ page }) => {
        await downloadPage.downloadFromPage(); 
        expect(await page.waitForTimeout(5000));
    })
})