const { test } = require("@playwright/test");

test("Calender_Automation", async ({ browser }) => {

    const day = "23";
    const month = "September"
    const year = "1998"

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")

    const calender = page.frameLocator("#frame-one796456169").locator(".icon_calendar");
    await calender.click();
    let i = 1;

    const next = page.frameLocator("#frame-one796456169").locator("div[class*='ui-datepicker-header']>a[title='Next']");
    const yearEle = page.frameLocator("#frame-one796456169").locator(".ui-datepicker-year");
    await yearEle.selectOption(year);

    while (i <= 12) {

        const monthName = await page.frameLocator("#frame-one796456169").locator("div[class*='ui-datepicker-header']>div>span").textContent();
        if (monthName === month) {
            break
        }
        await next.click();
        i++;
    }

    const dateEle = page.frameLocator("#frame-one796456169").locator("table[class='ui-datepicker-calendar']>tbody>tr>td>a[data-date='"+day+"']");
    await dateEle.click();

    const validDate = await page.frameLocator('#frame-one796456169').locator('#RESULT_TextField-2').getAttribute("value");

    console.log(validDate);  

   



})