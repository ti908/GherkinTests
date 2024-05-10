import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { Before } from '@badeball/cypress-cucumber-preprocessor';
import { formPage } from "../../../../support/selectors/formPage";
const userDetail = require ('../../../../fixtures/userDetail.json')
const FormPage = new formPage();


Before(() => {
    // This hook will be executed before all scenarios.
    cy.clearAllCookies()
  })

Given('I land on the shop login page', () => {
    cy.visit(Cypress.env('url'))

})
When('I enter my details in the fields provided and click the login button', () => {
    FormPage.getUsername().type(userDetail.username2).then($el => FormPage.assertInputField($el, userDetail.username2))
    FormPage.getPassword().type(userDetail.password).then($el => FormPage.assertInputField($el, userDetail.password))
    FormPage.getLoginBtn().click()
})

Then('Validate the error messages', () => {
    FormPage.errormess().should('exist')
    FormPage.errormess().should('include.text','Sorry, this user has been locked out')
})



Given('I visit the shop login page', () => {
    cy.visit(Cypress.env('url'))

})
When('I enter invalid details in the fields provided and click the login button', () => {
    cy.log('Negative Test Case')
    FormPage.getUsername().type(userDetail.username5).then($el => FormPage.assertInputField($el, userDetail.username5))
    FormPage.getPassword().type(userDetail.password).then($el => FormPage.assertInputField($el, userDetail.password))
    FormPage.getLoginBtn().click()
})

Then('Validate the error messages received', () => {
    FormPage.errormess().should('exist')
    FormPage.errormess().should('include.text','Username and password do not match')
})








   






