import { test, expect } from '@playwright/test';

test.describe('Travel',()=>{

    test('reworked', async ({ page }) => {
        await page.goto('https://devapp.reworked.ai/');
        
        await page.locator("//li[2]").click();
        await page.getByPlaceholder('yours@example.com').fill('playwrighttest@yopmail.com');
        await page.getByPlaceholder('your password').fill('Test@1234');
        await page.getByPlaceholder('Full Name').fill('Test Name');
        await page.locator("//button[@id='1-submit']").click();
        await page.locator("//p[normalize-space()='Real Estate Investors']").click();
        //span[normalize-space()='Mail']
        await page.locator("//span[normalize-space()='Mail']").check();
      

        
        
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Playwright/);
      });


})