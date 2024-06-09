@only
Feature: Graph feature

Background:

    Given user navigate to dsportalapp home page
    When User click on Sign-In buttons
    When User enters valid username and valid password
    Then User click on login button
    When The user clicks on the Get Started button below "Graph"
    Then The user is redirected to "Graphurl" Page

   Scenario Outline: User navigates to different graph page and try codeeditor with valid and invalid code
   
   	When The user clicks "<pageName>" link from main graph page
   	Then check the title of the page "<pageName>"
   	
   	When The user clicks the Try here link
	Then The user is in a page having an Editor with a Run button to test in "try Editor Url" page
		
		
	When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
	And  clicks run button
    Then The user is presented with the result after clicking run button from sheet "<Sheetname>" and <RowNumber>
    
    Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page
    When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber2>
    And clicks run button
    Then The user gets an error message as "NameError: name 'String' is not defined on line 1"

		Examples:
  		| pageName           	 	| Sheetname | RowNumber | RowNumber2|
  		| Graph 					| pythonCode | 5  |1|
 		| Graph Representations | pythonCode | 5 |1|
    