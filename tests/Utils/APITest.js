class APITest {


    constructor(apiRes,loginData) {

        this.apiRes = apiRes;
        this.loginData = loginData;

    }

    async getLoginRes() {

        const loginRes = await this.apiRes.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {

                data: this.loginData

            })
        const jsonVal = await loginRes.json();
        const tokens = jsonVal.token;

        return tokens;
    }

    async getOrderRes(orderData) {

        let response = {};
        response.loginToken = await this.getLoginRes();
        const orderRes = await this.apiRes.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {

                data: orderData,
                headers: {

                    'Authorization': response.loginToken,
                    'Content-Type': 'application/json'

                },
            })

        const jsonVal1 = await orderRes.json();
        const orderId = await jsonVal1.orders[0];
        response.orderId = orderId;
        return response;

    }





}
module.exports = { APITest };
