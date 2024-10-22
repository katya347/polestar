const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('should navigate to Polestar homepage and search', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.searchFor('Polestar 2');
    expect(await page.textContent('.search-results')).toContain('Polestar 2');
});
