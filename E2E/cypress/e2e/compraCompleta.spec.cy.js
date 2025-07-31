import LoginPage from '../support/pages/LoginPage'
import ProductPage from '../support/pages/ProductPage'
import CartPage from '../support/pages/CartPage'
import CheckoutPage from '../support/pages/CheckoutPage'
import compraData from '../fixtures/compraData.json'

describe('Flujo de compra', () => {
  const loginPage = new LoginPage()
  const productPage = new ProductPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  const login = (username, password) => {
    loginPage.visit()
    loginPage.verifyText("Swag Labs")
    loginPage.fillUsername(username)
    loginPage.fillPassword(password)
    loginPage.clickLogin()
    productPage.waitForElement('.app_logo')
  }

  const fillCheckoutForm = (data) => {
    checkoutPage.fillFirstName(data.firstName)
    checkoutPage.fillLastName(data.lastName)
    checkoutPage.fillPostal(data.postalCode)
    checkoutPage.clickContinue()
    productPage.waitForElement('.title')
  }

  it('Flujo completo de compra - Datos válidos', () => {
    login(compraData.valid.username, compraData.valid.password)

    productPage.addFirstProductCart()
    productPage.addSecondProductCart()
    productPage.goCart()

    cartPage.waitForElement('.title')
    cartPage.checkout("Your Cart")

    productPage.waitForElement('.title')
    fillCheckoutForm(compraData.valid)

    checkoutPage.clickFinish()
    checkoutPage.verifyText('Thank you for your order')
  })

  it('Flujo completo de compra - Login inválido', () => {
    loginPage.visit()
    loginPage.verifyText("Swag Labs")
    loginPage.fillUsername(compraData.invalidLogin.username)
    loginPage.fillPassword(compraData.invalidLogin.password)
    loginPage.clickLogin()
    loginPage.waitForElement('h3[data-test="error"]')
  })

  it('Flujo completo de compra - Sin artículos en el carrito', () => {
    login(compraData.valid.username, compraData.valid.password)

    productPage.goCart()
    cartPage.waitForElement('.title')
    cartPage.checkout("Your Cart")

    productPage.waitForElement('.title')
    fillCheckoutForm(compraData.valid)

    checkoutPage.clickFinish()
    checkoutPage.verifyText('Thank you for your order')
  })

  it('Flujo completo de compra - Checkout incompleto', () => {
    login(compraData.valid.username, compraData.valid.password)

    productPage.goCart()
    cartPage.waitForElement('.title')
    cartPage.checkout("Your Cart")

    productPage.waitForElement('.title')
    checkoutPage.clickContinue()
    checkoutPage.waitForElement('h3[data-test="error"]')
  })
})