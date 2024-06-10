Feature: Testing LinkedList page

Background:
    Given user navigate to dsportalapp home page
    When User click on Sign-In buttons
    When User enters valid username and valid password
    And User click on login button
    When The user clicks on the Get Started button below "Linkedlist"
    Then The user is redirected to "Linkedlist" Page
  
  @LinkedList01
  Scenario: User navigated to "Introduction" page

    When The user clicks Introduction link
    Then The user should be directed to "Introduction" of Linked List Page
    When The user clicks try here button in the introduction page
    When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
    And clicks run button
    Then The user is presented with the result after clicking run button from sheet "<Sheetname>" and <RowNumber>

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         0 |

  
  @LinkedList02
  Scenario Outline: The user is presented with error message for invalid code in Editor for linked list page
    When The user clicks Introduction link
    Then The user should be directed to "Introduction" of Linked List Page
    When The user clicks try here button in the introduction page
    When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
    And clicks run button
    Then The user gets an error message as "NameError: name 'String' is not defined on line 1"

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |

  @LinkedList03
  Scenario: User navigated to "creating linked list"
    When The user clicks creating linked list link
    Then The user is redirected to "Creating Linked List" Page

  @LinkedList08
  Scenario: User navigated to "Types of linked list" page
    When The user clicks the Types of Linked List button
    Then The user is redirected to "Types of Linked List" Page


  @LinkedList12
  Scenario: user navigated to "Implementation linked list in python" page
    When The user clicks the Implement Linked List in Python button
    Then The user is redirected to "Implement Linked List in Python" Page
  
  @LinkedList14
  Scenario: user navigated to "Traversal" page
    When The user clicks the Traversal button
    Then The user should be directed to "Traversal" of Linked List Page

  @LinkedList16
  Scenario: user navigated to "Insertion" page
    When The user clicks the Insertion button
    Then The user should be directed to "Insertion" of Linked List Page

  @LinkedList18
  Scenario: user navigated to "Deletion" page
    When The user clicks the Deletion button
    Then The user should be directed to "Deletion" of Linked List Page

  @LinkedList20
  Scenario: The user validating "Practice Questions" page
    When The user clicks Introduction link
    And The user clicks on the Practice Questions
    Then The user should be directed to "Practice Questions" of Linked List Page
