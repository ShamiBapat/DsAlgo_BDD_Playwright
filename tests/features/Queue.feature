# @only
#@Queue
Feature: Queue Page validation

    Background: Signed in user is already on Queue home page   
      Given user is already on dsportalapp home page 
      When user is already signed in into dsportalapp
      And user navigate to data-structures dropdown 
      And user click the queue menu "Queue" from drop down 
      Then user should redirect to "Queue" page   

  
  # @only  
  @ImplementationOfQueue
  Scenario: Redirect to python editor form Implementation of Queue in Python link
    
    Given user is already on Queue page
    When user click on Implementation of Queue in Python link
    Then user should redirect to "Implementation of Queue in Python" in queue page
    When user clicks on TryHere button from queue
    Then user should be redirect to the python editor page with "try Editor Url"
    
    
  @ImplementationOfQueue
  Scenario Outline: For Implementation Of Queue in python system will show output for valid python input  
  
    When user click on Implementation of Queue in Python link
    Then user should redirect to "Implementation of Queue in Python" in queue page
     When user clicks on TryHere button from queue
    Then user should be redirect to the python editor page with "try Editor Url"
    When for queue user enters valid python code from test sheet "<SheetName>" and <RowNumber>
    And user click on RUN button for queue
    Then for queue flow console should display result "<validResult>"
  
    Examples: 
      | SheetName  | RowNumber | validResult |
      | pythonCode |     0     | hello       |
      | pythonCode |     1     | Element Found |
#  @only     
@InvalidInput
  	Scenario Outline: The user is presented with error message for invalid code in Editor 
    When user click on Implementation of Queue in Python link
    Then user should redirect to "Implementation of Queue in Python" in queue page
    When user clicks on TryHere button from queue
    Then user should be redirect to the python editor page with "try Editor Url"
    When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber>
    And clicks run button
    Then The user gets an error message as "NameError: name 'String' is not defined on line 1"

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |

# @QueuePage
  # Scenario: Open the Queue page from the GetStarted button
  #     Given user is already on dsportalapp home page 
  #     When user is already signed in into dsportalapp      
  #     And user click the queue "Queue" GetStarted button
  #     Then user should redirect to "Queue" page  
