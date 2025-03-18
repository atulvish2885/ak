import { test, expect } from '@playwright/test';

test.describe('Makemytrip Successfully',()=>{

    test('makemytrip', async ({ page }) => {
        await page.goto('https://www.makemytrip.com/');
        await page.waitForLoadState('networkidle') 
        const locator=page.locator("//div[@class='style__LoginRegularSaverWrapper-sc-1ioaggt-0 ugrWM']");
        await expect(locator).toBeVisible();
        
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Playwright/);
      });

      test('Linkedin Automation', async ({ page }) => {
        await page.goto('https://www.linkedin.com/');
        await page.locator("//span[normalize-space()='People']").click();
        await expect(page.getByText('Try searching for your co-worker, classmate, professor, or friend.')).toBeVisible();
      });
})