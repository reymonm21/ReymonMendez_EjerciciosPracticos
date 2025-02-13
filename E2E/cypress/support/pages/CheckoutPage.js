import BasePage from "./BasePage";

class CheckoutPage extends BasePage{
    fillFirstName(firstName){
        this.fillInput('#first-name', firstName)
    }
    fillLastName(lastname){
        this.fillInput('#last-name', lastname)
    }
    fillPostal(postal){
        this.fillInput('#postal-code', postal)
    }
    clickContinue(){
        this.clickElement('#continue')
    }
    clickFinish(){
        this.clickElement('#finish')
    }
}
export default CheckoutPage