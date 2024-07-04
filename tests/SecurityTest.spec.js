const { test, request, expect } = require("@playwright/test");
const { APITest } = require('./Utils/APITest')

const loginData = { userEmail: "lihor23960@gate.com", userPassword: "Test@1234" }
const orderData = { orders: [{ country: "India", productOrderedId: "6581ca979fd99c85e8ee7faf" }] }
const fakePayLoadOrders = { data: [], message: "No Orders" };
let response;

test.beforeAll(async () => {

    const apiRes = await request.newContext();

    const apiUtils = new APITest(apiRes, loginData)

    response = await apiUtils.getOrderRes(orderData)

})


test.only("Mock_API", async ({ page }) => {

    page.addInitScript(value => {

        window.localStorage.setItem('token', value);


    }, response.loginToken);

    await page.goto("https://rahulshettyacademy.com/client");


    const orders = page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']");
    await orders.click();

    // Injecting the Network Interecption Code

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",

        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=668644ceae2afd4c0b16b589' })

        


    )


    const view = page.getByRole('button', { name: 'View' }).first();
    await view.click();
    console.log(response.orderId)
    await page.pause();

})