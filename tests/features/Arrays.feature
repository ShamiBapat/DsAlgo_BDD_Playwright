
 Feature: Array Validations feature
 Background:
    Given user navigate to dsportalapp home page
    When User click on Sign-In buttons
    When User enters valid username and valid password
    And User click on login button
    When User clicks getstarted button below Arrays
    Then Then The user is redirected to Array Page


#Arrays in python
Scenario:validating Arrays in python page with valid data
Then User clicks ArrayInPython Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user is presented with the result after clicking run button from sheet "<Sheetname>" and <RowNumber>

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         5 |



Scenario:  validating Arrays in python page with invalid data    
Then User clicks ArrayInPython Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |
#2 Arrays Using List
Scenario Outline: validating Arrays Using List page with valid data 
Then User clicks Arrays Using List Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user is presented with the result after clicking run button from sheet "<Sheetname>" and <RowNumber>

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         5 |

Scenario Outline:  validating  Arrays Using List Page page with invalid data    
Then User clicks Arrays Using List Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"


    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |
#3 Basic Operations in Lists
 Scenario:validating Basic Operations in Lists page with valid data
Then User clicks Basic Operations in Lists Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user is presented with the result after clicking run button from sheet "<Sheetname>" and <RowNumber>

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         5 |



Scenario Outline:  validating Basic Operations in Lists page with invalidData   
Then User clicks Basic Operations in Lists Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |     
#4  Applications of Array    
Scenario:validating Applications of Array page with valid data 
Then User clicks Applications of Array Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user is presented with the result after clicking run button from sheet "<Sheetname>" and <RowNumber>

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         5 |



Scenario Outline:  validating Applications of Array with invalidData   
Then User clicks Applications of Array Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page 
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"


    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |     
#practiceQ
 
#Search the array
 Scenario Outline: Practice Search the array Question 
Then User clicks Applications of Array Page
Then User clicks PracticeQuestion to practice Search the array question
When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber>  
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"
Then User submit answer for practice question 

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 | 
#Max Consecutive Ones
 Scenario Outline: Practice  Max Consecutive Ones Question 
Then User clicks Applications of Array Page
Then User clicks PracticeQuestion to practice Max Consecutive Ones question
When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber> 
And clicks run button 
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"
Then User submit answer for practice question 

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 | 

#findNumberWithEvenNumber
Scenario Outline: Practice  findNumberWithEvenNumber Question 
Then User clicks Applications of Array Page
Then User clicks PracticeQuestion findNumberWithEvenNumber question
When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"
Then User submit answer for practice question 

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 | 
#squaresOfASortedArray 
 Scenario Outline: Practice  squaresOfASortedArray Question 
Then User clicks Applications of Array Page
Then User clicks PracticeQuestion to squaresOfASortedArray question
When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"
Then User submit answer for squaresOfASortedArray practice question 

    Examples: 
      | Sheetname  | RowNumber |
      | pythonCode |         1 |       

          
     



