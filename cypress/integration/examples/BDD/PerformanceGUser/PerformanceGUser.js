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
    //,{failOnStatusCode: false}
    FormPage.getUsername().type(userDetail.username4).then($el => FormPage.assertInputField($el, userDetail.username4))
    FormPage.getPassword().type(userDetail.password).then($el => FormPage.assertInputField($el, userDetail.password))
    FormPage.getLoginBtn().click()
})
When('I sort the items and I click the cart after adding items add items to cart', () => {
    //let index = 0
    cy.get('.title').should('have.text', 'Products')
    ProductPage.sortDropdown().select(productData.ZA);
    Cypress.config('defaultCommandTimeout',8000)
    ProductPage.sortDropdown().should('have.value',productData.ZA)
    cy.selectProduct('Sauce Labs Onesie')
    cy.selectProduct('Sauce Labs Backpack')
    cy.selectProduct('Sauce Labs Bike Light')
    cy.selectProduct('Sauce Labs Fleece Jacket')

    //Removing the order of Sauce Labs Backpack from list
    FormPage.getRemoveBtn().click()
    
    ProductPage.ShoppingCart().click()
    Cypress.config('defaultCommandTimeout',8000)
    ProductPage.checkOutBtn().click()
})

When('I enter valid information', () => {
    let index = 0
    CheckoutPage.getFirstName().type(checkoutData.firstname).then($el => CheckoutPage.assertInputField($el, checkoutData.firstname))
    CheckoutPage.getLastName().type(checkoutData.lastname).then($el => CheckoutPage.assertInputField($el, checkoutData.lastname))
    CheckoutPage.getZipCode().type(checkoutData.ZipCode).then($el => CheckoutPage.assertInputField($el, checkoutData.ZipCode))
    CheckoutPage.getContinue().click() 
})

Then('Validate the total prices and verify Thank you message', () => {
    var sum=0
    cy.get('.inventory_item_price').each(($el, index, $list) => {

       const amount=$el.text()
       var res= amount.split("$")
       res= res[1].trim()
       sum= Number(sum)+Number(res)
       }).then(function()
       {
           cy.log(sum)
       })
       cy.get('.summary_subtotal_label').then(function(element)
       {
           const amount=element.text()
           var res= amount.split("$")
          var total= res[1].trim()
          expect(Number(total)).to.equal(sum)
       }) 
        cy.contains('Finish').click()
        cy.get('.complete-header').should('have.text','Thank you for your order!')
        cy.get('.complete-text').should('include.text','Your order has been dispatched')
})





   






