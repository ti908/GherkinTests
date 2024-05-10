#To Do - Convert following requirement into a testable feature
#const {preprocessor} = require("@badeball/cypress-cucumber-preprocessor/browserify");

Feature: E2E Use cases validation

    This End-End test suite is designed to analyse and test all significant functionality of the provided online shop

    Scenario: LockedUser Test Flow
    Given I land on the shop login page 
    When I enter my details in the fields provided and click the login button
    Then Validate the error messages

    Scenario: IncorrectUser Test Flow
    Given I visit the shop login page 
    When I enter invalid details in the fields provided and click the login button
    Then Validate the error messages received