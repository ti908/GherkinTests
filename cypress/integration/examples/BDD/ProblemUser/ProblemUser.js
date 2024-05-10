import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { Before } from '@badeball/cypress-cucumber-preprocessor';
import { formPage } from "../../../../support/selectors/formPage";
import { productPage } from "../../../../support/selectors/productPage";
import { checkoutPage } from "../../../../support/selectors/checkoutPage";
const userDetail = require ('../../../../fixtures/userDetail.json')
const productData = require ('../../../../fixtures/productData.json')
const checkoutData = require ('../../../../fixtures/checkOutData.json')
const FormPage = new formPage();
const ProductPage = new productPage();
const CheckoutPage = new checkoutPage();

Before(() => {
    // This hook will be executed before all scenarios.
    cy.clearAllCookies()
  })

  Given('I land on the shop login page and Login successfully', () => {
    cy.visit(Cypress.env('url'))

    FormPage.getUsername().type(userDetail.username3).then($el => FormPage.assertInputField($el, userDetail.username3))
    FormPage.getPassword().type(userDetail.password).then($el => FormPage.assertInputField($el, userDetail.password))
    FormPage.getLoginBtn().click()
})
When('I sort the items and I click the cart after adding items add items to cart', () => {
    //let index = 0
    cy.get('.title').should('have.text', 'Products')

    // Test case to check the sorting feature of the online shop
    ProductPage.sortDropdown().select(productData.ZA);
    Cypress.config('defaultCommandTimeout',8000)
    
    cy.log('Negative Test Case')
    ProductPage.sortDropdown().should('not.have.value',productData.ZA)

    cy.get('.btn').click({ multiple: true })
    ProductPage.ShoppingCart().click()

    cy.log('Negative Test Case')
    //items added to the checkout list should be 6. Some items were not selected when clicked
    cy.get('.cart_item_label').should('not.have.length',6)
    ProductPage.checkOutBtn().click()
})

Then('I attempt to enter valid information details', () => {
    CheckoutPage.getFirstName().type(checkoutData.firstname)

    cy.log('Negative Test Case')
    CheckoutPage.getLastName().type(checkoutData.lastname)
    
    CheckoutPage.getZipCode().type(checkoutData.ZipCode)
    CheckoutPage.getContinue().click() 
    CheckoutPage.getErrMss().should('exist')
    CheckoutPage.getErrMss().should('include.text','Last Name is required')

})






   






