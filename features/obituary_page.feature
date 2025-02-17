@webdriver_ui
Feature: Obituary Page

  Background:
    As a User,
    Given I want to leave a Guest Book message to a Person

  Scenario: Leave a Guest Book entry
    When I go to Obituary page of that person
    Then I see the correct person name
    And I scroll down to Guest Book section
    And I create a Guest Book entry
    Then I see that message is recorded
