const { test } = require("@playwright/test")
const { LoginSwag } = require("./Pom/LoginElements")


test("TestPom", async ({ page }) => {


    page.goto("https://www.saucedemo.com/");
    const sw = new LoginSwag(page);
    await sw.fillUserName("standard_user");
    await sw.fillPass("secret_sauce");
    await sw.clickLogin();









})