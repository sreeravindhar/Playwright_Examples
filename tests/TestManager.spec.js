const { test } = require("@playwright/test")
const { ManagerPom } = require("./Pom/Manager")


test("TestManager", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    const sw = new ManagerPom(page);
    await sw.getLoginPage().fillUserName("standard_user");
    await sw.getLoginPage().fillPass("secret_sauce");
    await sw.getLoginPage().clickLogin();
    await sw.getPrdPage().clickPrd(0);






})