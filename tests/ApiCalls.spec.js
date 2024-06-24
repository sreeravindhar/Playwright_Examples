const { test ,request, expect} = require("@playwright/test");


const loginData = {userEmail:"lihor23960@gate.com",userPassword:"Test@1234"}
const orderData = {orders:[{country:"India",productOrderedId:"6581cade9fd99c85e8ee7ff5"}]}

test("API_Calls", async () =>{

    const api = await request.newContext();
    const loginRes = await api.post("https://rahulshettyacademy.com/api/ecom/auth/login" ,
        {
            
            data : loginData

    })
    expect(loginRes.ok).toBeTruthy();
    const jsonVal = await loginRes.json();
    const tokens = jsonVal.token;

      // Create Order
      const orderRes = await api.post("https://rahulshettyacademy.com/api/ecom/order/create-order" ,
        {   
            
            data : orderData,
            headers:{

                'Authorization': tokens,
                'Content-Type' : 'application/json'

            },
    })

    const jsonVal1 = await orderRes.json();
    const orderId = jsonVal1.orders[0];


    console.log(orderId)


})