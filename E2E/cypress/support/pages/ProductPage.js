import BasePage from "./BasePage";

class ProductPage extends BasePage{

    addFirstProductCart(){
        this.clickElement('#add-to-cart-sauce-labs-backpack')
    }
    addSecondProductCart(){
        this.clickElement('#add-to-cart-sauce-labs-bike-light')
    }
    goCart(){
        this.clickElement('.shopping_cart_link')
    }
}
export default ProductPage