const { test, expect } = require("@playwright/test");


let webContext;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto("https://demo.nopcommerce.com/");
    const lgnBtn = page.locator(".ico-login");
    await lgnBtn.click();
    const user = page.locator("#Email");
    await user.fill("lihor23960@gawte.com");
    const pass = page.locator("#Password");
    await pass.fill("Test@123");
    const login = page.locator("text = Log in");
    await login.nth(1).click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'LoginState.json' });
    webContext = await browser.newContext({ storageState: 'LoginState.json' });



})

test("StateCheck", async () => {

    const prdName = "HP Spectre XT Pro UltraBook";
    const prdQty = "12";
    
    const page = await webContext.newPage();
    page.goto("https://demo.nopcommerce.com/");
    const prdSection = page.locator("text=Computers").nth(0);
    await prdSection.click();
    const prdPage = page.locator("[alt *= 'category Notebooks']")
    await prdPage.click();
    await page.waitForLoadState();
    const titlesPrd = page.locator(".product-title>a");
    let count = await titlesPrd.count();
    for (let i = 0; i < count; i++) {

        if (await titlesPrd.nth(i).textContent() === prdName) {

            await titlesPrd.nth(i).click();
            break;
        }

    }
    await page.waitForLoadState();
    const prdVal = await page.locator("#price-value-7").textContent();
    console.log(prdVal);

    const qty = page.locator("#product_enteredQuantity_7");
    await qty.fill(prdQty);

    const addTC = page.locator("#add-to-cart-button-7");
    await addTC.click();

    const close = page.getByTitle('Close');
    await close.click();

    const shCr = page.locator("li#topcartlink");
    await shCr.hover();

    const prdCheckEle = page.locator("div[id='flyout-cart']>div>div[class=items]>div>div[class='product']>div[class='name']>a");
    const prdChk = await prdCheckEle.textContent();
    expect(prdChk).toEqual(prdName)

    const prcEle = page.locator("div[id='flyout-cart']>div>div[class=items]>div>div[class='product']>div[class='price']>span");
    const priceTxt = prcEle.innerText();
    const txtOne = (await priceTxt).replace("$", "");
    const txtTwo = (await txtOne).replace(",", "");

    var price = Number(txtTwo);
    expect(price).toEqual(1350)

    const totalEle = page.locator("div[id='flyout-cart']>div>div[class='totals']>strong");
    const totalTxt = totalEle.innerText();
    const txtOnee = (await totalTxt).replace("$", "");
    const txtTwoo = (await txtOnee).replace(",", "");

    var total = Number(txtTwoo);
    expect(total).toEqual(price * Number(prdQty));

    console.log(price + " : " + total);

    const gtCart = page.getByRole('button', { name: 'Go to cart' });
    await gtCart.click();

    await page.locator('#checkout_attribute_1').selectOption({ index: 1 });

    await page.getByRole('link', { name: 'Estimate shipping' }).click();

    await page.locator('#CountryId').selectOption("133");

    await page.locator('#ZipPostalCode').fill("600021");

    await page.locator('div').filter({ hasText: /^2nd Day Air-\$0\.00$/ }).locator('label').click();

    await page.locator("text='Apply'").click();

    await page.getByLabel('I agree with the terms of').click();

    await page.getByRole('button', { name: 'Checkout' }).click();

    const continueBtn = page.locator("text='Continue'");
    continueBtn.nth(0).click();
    await page.waitForLoadState();
    continueBtn.nth(2).click();
    await page.waitForLoadState();
    continueBtn.nth(3).click();
    await page.waitForLoadState();
    continueBtn.nth(4).click();
    await page.getByRole('button', { name: 'Confirm' }).click();

    const orderId = await page.getByText('Order number:').textContent();
    console.log(orderId);

    await page.getByRole('link', { name: 'Click here for order details.' }).click();

    const status = await page.locator(".order-status").textContent();
    expect(status).toContain("Pending");



})