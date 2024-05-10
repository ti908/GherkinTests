/// <reference types="cypress" />

export class checkoutOverview {

    getHeader() {
        return cy.get('.complete-header')
    }

   getDes(){
    return cy.get('[data-test="complete-text"]')
   }

};
