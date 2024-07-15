class LoginSwag {


    constructor(page) {

        this.userName = page.locator("#user-name");
        this.pass = page.locator("#password");
        this.login = page.locator("#login-button");


    }

    async fillUserName(user) {

        await this.userName.fill(user)

    }
    async fillPass(pass) {

        await this.pass.fill(pass)

    }

    async clickLogin() {

        await this.login.click()

    }


}
module.exports = { LoginSwag };