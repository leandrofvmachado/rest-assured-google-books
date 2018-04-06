Feature: Get Book By Author
  Scenario: User calls web service to get books by single author
    Given Author "Stephen King" exists
    When A user retrieves his books
    Then the status code is 200
