Feature: Employee Benefit Costs Preview
  As an Employer
  I want to input my employee data
  So that I can get a preview of benefit costs.

  Scenario: Add Employee no Discount
    Given an Employer
    And I am on the Benefits Dashboard page 
    When I select Add Employee 
    Then I should be able to enter employee details
    And First Name does not begin with "A" or "a"
    And the employee should save 
    And I should see the employee in the table
    And the benefit cost calculations are correct

  Scenario: Add Employee with Discount
    Given an Employer 
    And I am on the Benefits Dashboard page 
    When I select Add Employee 
    Then I should be able to enter employee details
     And First Name begins with "A" or "a" 
    And the employee should save 
    And I should see the employee in the table
     And the employee has a 10% discount
     And the benefit cost calculations are correct

  Scenario: Delete Employee
    Given an Employer 
    And I am on the Benefits Dashboard page 
    When I select the Action X 
    Then the employee should be deleted

