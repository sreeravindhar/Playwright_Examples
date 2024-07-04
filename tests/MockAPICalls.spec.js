const { test , request, expect } = require("@playwright/test");
const {APITest} = require('./Utils/APITest')

const loginData = {userEmail:"lihor23960@gate.com",userPassword:"Test@1234"}
const orderData = {orders:[{country:"India",productOrderedId:"6581ca979fd99c85e8ee7faf"}]}
const fakePayLoadOrders = { data: [], message: "No Orders" };
let response;

test.beforeAll(async ()=>{

    const apiRes = await request.newContext();
    
    const apiUtils = new APITest(apiRes,loginData)

    response = await apiUtils.getOrderRes(orderData)

})


test.only("Mock_API", async ({ page }) =>{

    page.addInitScript(value =>{

        window.localStorage.setItem('token', value);


    }, response.loginToken );
   
    await page.goto("https://rahulshettyacademy.com/client");

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",

        async route =>{
        let body = JSON.stringify(fakePayLoadOrders);    
        const response = page.request.fetch(route.request());
        route.fulfill(
            {
                response,body,
            }
        );

        }

    )


    const orders = page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']");
    await orders.click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    console.log(response.orderId)
    await page.pause();

})