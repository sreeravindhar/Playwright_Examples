const {test, expect} = require('@playwright/test')

test("ValidLogin",async ({ browser })=>{
       
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

})


test ("InValidLogin",async ({ browser })=>{
       
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("ssssssssss");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    let errMsg = await page.locator("[data-test='error']").textContent();
    console.log(errMsg);
    await expect(page.locator("[data-test='error']")).toContainText("Test");
  
})