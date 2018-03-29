Feature: Login

  Scenario: Successful login
    Given The user uses the correct credentials
    When The user makes a login request
    Then The user receives a token