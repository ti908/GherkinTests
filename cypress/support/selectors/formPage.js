/// <reference types="cypress" />

export class formPage {

    getUsername() {
        return cy.get('[id="user-name"]')
    }

    getPassword() {
        return cy.get('[id="password"]')
    }

    getLoginBtn() {
        return cy.get('[id="login-button"]')
    }

    errormess()
    {
        return cy.get('[data-test="error"]')
    }

    getRemoveBtn(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    assertInputField($el, text) {
        const elementText = $el[0].value
        expect(elementText.length).to.be.greaterThan(0)
        expect(elementText).to.be.equal(text)
    }
};