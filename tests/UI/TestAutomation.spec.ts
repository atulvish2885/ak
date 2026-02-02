import { test, expect } from '@playwright/test';

test.describe('Travel',()=>{

    test('reworked', async ({ page }) => {
        await page.goto('https://devapp.reworked.ai/');
        
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Playwright/);
      });
})