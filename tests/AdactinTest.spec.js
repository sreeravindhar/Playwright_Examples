const { test, expect } = require("@playwright/test")

test("Adactin Test", async ({ browser, launchOptions }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://adactinhotelapp.com/index.php");
    const user = page.locator("#username");
    const pass = page.locator("#password");
    const lgnBtn = page.locator("#login")
    await user.fill("GenZTest");
    await pass.fill("123456");
    await lgnBtn.click();
    await page.locator("#location").selectOption({index: 1});
    await page.locator("#hotels").selectOption("Hotel Sunshine");
    await page.locator("#room_type").selectOption("Super Deluxe");
    await page.locator("#room_nos").selectOption("10");
    await page.locator("#adult_room").selectOption("4");
    await page.locator("#Submit").click();
    await page.locator("#radiobutton_0").check();
    await page.locator("#continue").click();
    await page.locator("#first_name").fill("Test");
    await page.locator("#last_name").fill("Account");
    await page.locator("#address").fill("Summa Address Chennai TN");
    await page.locator("#cc_num").fill("7894561234567894");
    await page.locator("#cc_type").selectOption("VISA");
    await page.locator("#cc_exp_month").selectOption("12");
    await page.locator("#cc_exp_year").selectOption("2030");
    await page.locator("#cc_cvv").fill("456");
    await page.locator("#book_now").click();
    const price = await page.locator("#final_price").getAttribute("value");
    const hName = await page.locator("#hotel_name").getAttribute("value");
    const orID = await page.locator("#order_no").getAttribute("value");
    console.log("The Price " + price);
    console.log("The Hotel Name " + hName);
    console.log("Order ID" + orID);
    await expect('001').toEqual(orID);
})
