Playwright – UI automation
Playwright Test Runner – Built-in test runner
TypeScript / JavaScript – Language
Axios / built-in fetch – For API automation
Dotenv – For environment variable management (optional)
Allure / HTML Reports – Test reporting


Installing the node js latest version from https://nodejs.org/en
Installing Playwright fatre the installation of node js in your system
npm install playwright@latest

Running the Test cases for UI-
npx playwright test tests/ui

Running the Test cases for API
npx playwright test tests/api

Running the Test cases
npx playwright test

 UI test case writing

test('User can log in', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});

API test case writing

test('GET user details', async ({ request }) => {
  const response = await request.get('/api/users/1');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(1);
});

Generate and View HTML Report
npx playwright show-report


Allure Report (if configured)
npm run test:allure
npm run allure:report



