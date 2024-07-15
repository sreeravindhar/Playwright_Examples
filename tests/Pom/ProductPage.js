class ProductPage {


    constructor(page)
    {

        this.products = page.locator(".inventory_item_img");

    }

    async clickPrd(prdNo){

        this.products.nth(prdNo).click();

    }










}
module.exports = {ProductPage}