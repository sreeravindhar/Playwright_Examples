const {test} = require("@playwright/test");
const { request } = require("http");

test("Abort API",async ({page}) =>{


    await page.goto("https://www.saucedemo.com/")

    await page.route('**/*.{jpg,svg}', route => route.abort());
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await page.on("response",response => console.log(response.url() + " : "+ response.status()));


    await page.pause();




})
