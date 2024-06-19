const { test } = require("@playwright/test")

test("Methods", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    const user = page.locator("#Email");
    await user.clear();
    await user.fill("admin@yourstore.com");
    const pass = page.locator("#Password");
    await pass.clear();
    await pass.fill("admin");
    const lgnBtn = page.locator("button[type='submit']");
    await lgnBtn.click();
    const listText = page.locator("[role='menu']>li[class='nav-item has-treeview']>a>p");
    const texts = await listText.allInnerTexts();
    console.log(texts);
    const links = page.locator("[role='menu']>li[class='nav-item has-treeview']>a");
    await links.nth(1).click();
    const lnk = await links.nth(2).getAttribute('class');
    console.log(lnk);

});