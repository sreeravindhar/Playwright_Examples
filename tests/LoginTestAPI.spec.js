const { test , request, expect } = require("@playwright/test");
const {APITest} = require('./Utils/APITest')

const loginData = {userEmail:"lihor23960@gate.com",userPassword:"Test@1234"}
const orderData = {orders:[{country:"India",productOrderedId:"6581ca979fd99c85e8ee7faf"}]}
let response;

test.beforeAll(async ()=>{

    const apiRes = await request.newContext();
    
    const apiUtils = new APITest(apiRes,loginData)

    response = await apiUtils.getOrderRes(orderData)

})


test.only("Login_Token", async ({ page }) =>{

    page.addInitScript(value =>{

        window.localStorage.setItem('token', value);


    }, response.loginToken );
   
    await page.goto("https://rahulshettyacademy.com/client");

    console.log(response.orderId)
    await page.pause();

})