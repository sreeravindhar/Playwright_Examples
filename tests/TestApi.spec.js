const { request, test } = require("@playwright/test")


const updateData = {
    name: "morpheus",
    job: "leader"
}

test("PostAPI", async () => {


    const api = await request.newContext();
    const response = await api.post("https://reqres.in/api/users", {

        data: updateData

    })

    const code = await response.status();
    const results = await response.json();

    console.log(code);
    console.log(results);
    console.log(results.id);
    
})
