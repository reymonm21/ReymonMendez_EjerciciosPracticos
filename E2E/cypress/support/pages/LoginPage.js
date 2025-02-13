import BasePage from "./BasePage";

class LoginPage extends BasePage{
    visit(){
        super.visit('https://www.saucedemo.com/')
    }
    fillUsername(username){
        this.fillInput('#user-name', username)
    }
    fillPassword(password){
        this.fillInput('#password', password)
    }
    clickLogin(){
        this.clickElement('#login-button')
    }
}
export default LoginPage