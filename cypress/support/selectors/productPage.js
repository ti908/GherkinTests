/// <reference types="cypress" />

export class productPage {

    ShoppingCart()
    {
        return cy.get('.shopping_cart_link')
    }
    
    sortDropdown()
    {
        return cy.get('[data-test="product-sort-container"]')
    }
    
    checkOutBtn()
    {
        return cy.get('[data-test="checkout"]')
    }

    };