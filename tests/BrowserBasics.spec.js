const { test, expect } = require('@playwright/test');

test("BrowserInitialTest", async ({ browser }) => {

    // Code for playwright custom Browser

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.facebook.com")


});

test("PageInitialTest", async ({ page }) => {

    // Code for playwright Default Browser

    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');


});