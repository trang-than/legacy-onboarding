@rest_api
Feature: Obituary API

  Background:
    Given I have an Obituary endpoint "/us/obituaries/chicagotribune/name/{personName}-obituary?pid={personId}"

  Scenario Outline: Verify GET Obituary returns correct status code
    When I send a GET Obituary request with Person Id is "<Person ID>" and Person Name is "<Person Name>"
    Then I receive Response Status Code as <Status Code>

    Examples:
      | Person ID | Person Name         | Status Code |
      | 196167379 | virginia-gruchalski | 200         |
      | dummyId   | dummyName           | 404         |

