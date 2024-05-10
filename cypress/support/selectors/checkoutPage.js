/// <reference types="cypress" />

export class checkoutPage {

    getTitle() {
        return cy.get('.title')
    }

    getFirstName() {
        return cy.get('[id="first-name"]')
    }

    getLastName() {
        return cy.get('[id="last-name"]')
    }

    getZipCode() {
        return cy.get('[id="postal-code"]')
    }

    getContinue(){
        return cy.get('[id="continue"]')
    }

    getErrMss(){
        return cy.get('[data-test="error"]')
    }

    assertInputField($el, text) {
        const elementText = $el[0].value
        expect(elementText.length).to.be.greaterThan(0)
        expect(elementText).to.be.equal(text)
    }

    NegassertInputField($el, text) {
        const elementText = $el[0].value
        expect(elementText.length).to.be.equal(0)
    }

    SpecialChar($el, text){
        const elementText = $el[0].value
        const regex = /[^a-zA-Z0-9\s]/g;
        const specialCharacters = text.match(regex);
        expect(elementText).to.not.include(specialCharacters)
    }
};