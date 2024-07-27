const { test, expect } = require("@playwright/test");
const dataSet = JSON.parse(JSON.stringify(require("./Utils/Data.json")));
const { ManagerPom } = require("./Pom/Manager");


for (const data of dataSet) {

    test(`SwagTest in ${data.scenario}`, async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");
        const sw = new ManagerPom(page);
        await sw.getLoginPage().fillUserName(data.username);
        await sw.getLoginPage().fillPass(data.password);
        await sw.getLoginPage().clickLogin();
        
        


    })





}