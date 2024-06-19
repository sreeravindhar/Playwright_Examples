const { test } = require("@playwright/test")

test("Window_Handling", async ({ browser }) => {


    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/#");
    const link = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        link.click(),


    ])
    const texts = await newPage.locator("p.im-para.red").textContent();
    console.log(texts);
    const user =  page.locator("#username");
    await user.fill("abcdefg");
    await page.pause();
    const s = await user.getAttribute("type");
    console.log(s);
})





