import { test, expect } from '@playwright/test';
import { UploadPage } from '../src/pages/upload';
import { commonData } from '../src/testData/commonData';


test.describe(`Heroku Upload Suite` , () => {

    let uploadPage; 

    test.beforeEach(async ({page}) => {
        uploadPage = new UploadPage(page); 
        await uploadPage.gotoUploadPage(); 
    })
    test('should upload successfully', async ({ page }) => {
        await uploadPage.uploadToPage(); 
        expect(await page.waitForTimeout(5000));
    })
})