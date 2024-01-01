import { test, expect } from '@playwright/test';
import { AlertsPage } from '../src/pages/alerts';
import { commonData } from '../src/testData/commonData';

test.describe(`Heroku Alerts Suite` , () => {

    let alertsPage; 

    test.beforeEach(async ({page}) => {
        alertsPage = new AlertsPage(page); 
        await alertsPage.gotoJsAlerts(); 
    })
    test('should alert appear', async ({ page }) => {
        await alertsPage.clickForAlert(); 
        expect(await page.locator('text=I am JS alert'));
    })
    test('should confirm appear', async ({ page }) => {
        await alertsPage.clickForConfirm(); 
        expect(await page.on('I am a JS Confirm'));
    })
    test('should prompt appear', async ({ page }) => {
        await alertsPage.clickForPrompt(); 
        expect(await dialog('I am a JS prompt'));
    })
    
})


