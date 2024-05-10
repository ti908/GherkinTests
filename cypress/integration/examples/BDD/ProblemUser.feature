#To Do - Convert following requirement into a testable feature
#const {preprocessor} = require("@badeball/cypress-cucumber-preprocessor/browserify");

Feature: e2e Use cases validation

    This End-End test suite is designed to analyse and test all significant functionality of the provided online shop

    Scenario: ProblemUser Test Flow
    Given I land on the shop login page and Login successfully
    When I sort the items and I click the cart after adding items add items to cart 
    Then I attempt to enter valid information details