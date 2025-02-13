import LoginPage from '../support/pages/LoginPage'
import ProductPage from '../support/pages/ProductPage'
import CartPage from '../support/pages/CartPage'
import CheckoutPage from '../support/pages/CheckoutPage'


describe('Flujo de compra', () => {
  const loginPage = new LoginPage()
  const productPage = new ProductPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  it('Flujo completo de compra - Datos validos', () => {
    loginPage.visit()
    loginPage.verifyText("Swag Labs")
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()

    productPage.waitForElement('.app_logo')
    productPage.addFirstProductCart()
    productPage.addSecondProductCart()
    productPage.goCart()
    
    cartPage.waitForElement('.title')
    cartPage.checkout("Your Cart")

    productPage.waitForElement('.title')
    checkoutPage.fillFirstName('Reymon')
    checkoutPage.fillLastName('Mendez')
    checkoutPage.fillPostal('123456')
    checkoutPage.clickContinue()
    productPage.waitForElement('.title')
    checkoutPage.clickFinish()
    checkoutPage.verifyText('Thank you for your order')
  })

  it('Flujo completo de compra - Login invalido', () => {
    loginPage.visit()
    loginPage.verifyText("Swag Labs")
    loginPage.fillUsername('standard')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()
    loginPage.waitForElement('h3[data-test="error"]')
  })

  it('Flujo completo de compra - Sin articulos en el carrito', () => {
    loginPage.visit()
    loginPage.verifyText("Swag Labs")
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()

    productPage.waitForElement('.app_logo')
    productPage.goCart()
    
    cartPage.waitForElement('.title')
    cartPage.checkout("Your Cart")

    productPage.waitForElement('.title')
    checkoutPage.fillFirstName('Reymon')
    checkoutPage.fillLastName('Mendez')
    checkoutPage.fillPostal('123456')
    checkoutPage.clickContinue()
    productPage.waitForElement('.title')
    checkoutPage.clickFinish()
    checkoutPage.verifyText('Thank you for your order')
  })

  it('Flujo completo de compra - Sin completar el formulario de checkout y tratar de continuar', () => {
    loginPage.visit()
    loginPage.verifyText("Swag Labs")
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()

    productPage.waitForElement('.app_logo')
    productPage.goCart()
    
    cartPage.waitForElement('.title')
    cartPage.checkout("Your Cart")

    productPage.waitForElement('.title')
    checkoutPage.clickContinue()
    checkoutPage.waitForElement('h3[data-test="error"]')
  })

})