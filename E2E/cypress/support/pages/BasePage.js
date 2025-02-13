class BasePage {
    visit(url){
        cy.visit(url)
    }
    clickElement(selector){
        cy.get(selector).click()
    }
    fillInput(selector, text){
        cy.get(selector).type(text)
    }
    verifyText(text){
        cy.contains(text).should('be.visible')
    }
    waitForElement(selector){
        cy.get(selector).should('be.visible')
    }
}

export default BasePage