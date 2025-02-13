import BasePage from "./BasePage";

class cartPage extends BasePage{
    checkout(){
        this.clickElement('#checkout')  
    }
}
export default cartPage