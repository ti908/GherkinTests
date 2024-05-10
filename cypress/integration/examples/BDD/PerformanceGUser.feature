Feature: e2e Use cases validation

    This End-End test suite is designed to analyse and test all significant functionality of the provided online shop

    Scenario: PerformanceGUser Test Flow
    Given I land on the shop login page and Login successfully
    When I sort the items and I click the cart after adding items add items to cart 
    And I enter valid information 
    Then Validate the total prices and verify Thank you message
