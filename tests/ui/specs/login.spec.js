const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('should navigate to Polestar developer portal and click login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.clickLogin();
    expect(await page.url()).toContain('login');
});
