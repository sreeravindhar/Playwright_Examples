const { test, request, expect } = require("@playwright/test");


test("POC_AES", async () => {


    const api = await request.newContext();
    const res = await api.get("https://petstore.swagger.io/v2/swagger.json");
    const jsonVal = await res.json();
    const paths = jsonVal.paths;
    console.log(paths)
    const host = jsonVal.host
    const basePath = jsonVal.basePath

    for (const endpoint in paths) {
        if (paths.hasOwnProperty(endpoint)) {
            console.log(`Endpoint: ${endpoint}`);

            const methods = Object.keys(paths[endpoint]);
            for (const method of methods) {
                console.log(`  Method: ${method.toUpperCase()}`);

                const startTime = Date.now();
                const response = await api[method]("https://"+host+basePath+endpoint);
                const endTime = Date.now();
                
                const status = await response.status();
                const contentType = await response.headers()['content-type'];
                const responseTime = endTime - startTime;
                const describ = await response.statusText();
                console.log(`    Status: ${status}`);
                console.log(`    Content-Type: ${contentType}`);
                console.log(`    Response Time: ${responseTime} ms`);
                console.log(`    Description: ${describ}`)
            }
        }
    }



})
