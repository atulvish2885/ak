import { test, expect } from '@playwright/test';
const baseurl= 'htps://flipkart.com';


test.describe('flipkart',()=>{

    test('Flipkart Automation', async ({ page }) => {

      const inputbox = await page.locator('//input[@class="lNPl8b"]');
        await page.goto(baseurl);
        
        await inputbox.fill("Apple Iphone 17 PRO");
        await inputbox.press('Enter');
        await page.waitForTimeout(3000);
        


      });
})