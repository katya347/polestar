const { test, expect } = require('@playwright/test');
const MenuNavigationPage = require('../pages/MenuNavigationPage');

test('should navigate to Cars page via menu', async ({ page }) => {
    const menuNavPage = new MenuNavigationPage(page);
    await menuNavPage.openMenu();
    await menuNavPage.goToCarsPage();
    expect(await page.url()).toBe('https://www.polestar.com/se/cars');
});
