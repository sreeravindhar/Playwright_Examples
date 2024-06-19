const { test } = require("@playwright/test");

test("Basic_Auth", async ({ browser }) =>{


    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth")


})