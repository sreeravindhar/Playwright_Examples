const {LoginSwag} = require("./LoginElements");
const {ProductPage}= require("./ProductPage");


class ManagerPom {


    constructor(page){
        this.page = page;
        this.login = new LoginSwag(this.page);
        this.prdPage = new ProductPage(page);

    }

    getLoginPage(){

        return this.login;
    }

    getPrdPage(){
        return this.prdPage;
    }




}
module.exports = {ManagerPom};