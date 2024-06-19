const { test } = require("@playwright/test");

test("Alert_Automation", async ({ browser }) =>{


    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.leafground.com/alert.xhtml;jsessionid=node01e2in6doi2zbqag8mrhekh2mc3797685.node0")

    // // -> Simple Alert JS
    // await page.locator("[id='j_idt88:j_idt91']").click();
    // await page.on('dialog',dialog => dialog.accept() );
    
    // // -> Confirm Alert JS
    // await page.locator("[id='j_idt88:j_idt93']").click();
    // await page.on('dialog',dialog => dialog.dismiss() );

      // -> Promt Alert JS
      await page.on('dialog',dialog => dialog.accept('sree') );
      await page.locator("[id='j_idt88:j_idt104']").click();
      

    await page.pause();





})