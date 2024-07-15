const {test, expect} = require("@playwright/test");


test("Screenshot & UI Testing",async ({page}) =>{


    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    // Element
    await page.locator("#login-button").screenshot({path:"D:\\My data\\JS Workspace\\Playwright_Examples\\Screenshots\\Element.png"})
    await page.locator("#login-button").click();
    // Full Page
    await page.screenshot({path:"D:\\My data\\JS Workspace\\Playwright_Examples\\Screenshots\\FullPage.png"});

    await page.goto("https://www.amazon.in/ref=nav_logo")
    // UI Testing 
    expect(await page.screenshot()).toMatchSnapshot("FullPage.png")

    await page.pause();




})
