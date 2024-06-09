
Feature: DataStructures-Introduction feature
  
Background:
    Given user navigate to dsportalapp home page
    When User click on Sign-In buttons
    When User enters valid username and valid password
    And User click on login button
    When The user clicks on the Get Started button below "Datastructures"
    Then The user is redirected to "Data Structures-Introduction" Page
    When The user clicks on the Time Complexity link

 Scenario: DataStructure
    When The user is redirected to "Time Complexity" Page
    When the user clicks on Practice Questions link
    Then The user is redirected to "Practice Questions DS" Page
    Then The user goes back to previous Page "Time Complexity"
    
  Scenario: entering code  
    When The user clicks the Try here link
    Then The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
    When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
    And clicks run button
    Then The user is presented with the result after clicking run button from sheet "<Sheetname>" and <RowNumber>

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         5 |

  	Scenario Outline: The user is presented with error message for invalid code in Editor 
    When The user clicks the Try here link
    Then The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
    When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber>
    And clicks run button
    Then The user gets an error message as "NameError: name 'String' is not defined on line 1"

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |
    
