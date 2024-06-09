@Tree
Feature: User tests the Tree page on the Ds algo application

Background:
    Given user navigate to dsportalapp home page
    When User click on Sign-In buttons
    When User enters valid username and valid password
    And User click on login button

  @Tree_S1
  Scenario: Tree scenarios
  Given The user is on the "Tree page" after logged in Tree page
  When The user clicks on the Overview of Trees link in Tree page
  Then The user should be directed to the "Overview of Trees" of tree Page
  
  @Tree_S2
  Scenario: The user is able to navigate to "Terminologies" Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Terminologies button
    Then The user should be directed to the "Terminologies" of tree Page

  
  @Tree_S3
  Scenario: The user is able to navigate to "Types of Trees" Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Types of Trees button
    Then The user should be directed to the "Types of Trees" of tree Page

  @Tree_S4
  Scenario: The user is able to navigate to "Tree Traversals" Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Tree Traversals button
    Then The user should be directed to the "Tree Traversals" of tree Page

  @Tree_S5
  Scenario: The user is able to navigate to "Traversals illustration" Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Traversal illustration button
    Then The user should be directed to the "Traversals-Illustration" of tree Page

  @Tree_S6
  Scenario: The user is able to navigate to "Binary trees" Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the binary trees button
    Then The user should be directed to the "Binary Trees" of tree Page

@Tree_S7
  Scenario: The user is able to navigate to "Types of Binary trees" Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the types of binary trees button
    Then The user should be directed to the "Types of Binary Trees" of tree Page

  @Tree_S8
  Scenario: The user is able to navigate to Implementation in Python Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Implementation in Python button
    Then The user should be directed to the "Implementation in Python" of tree Page

  @Tree_S9
  Scenario: The user is able to navigate to binary tree traversals Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the binary tree traversals button
    Then The user should be directed to the "Binary Tree Traversals" of tree Page

  @Tree_S10
  Scenario: The user is able to navigate to Implementation of Binary Trees Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Implementation of Binary Trees button
    Then The user should be directed to the "Implementation of Binary Trees" of tree Page

  @Tree_S11
  Scenario: The user is able to navigate to Applications of Binary Trees Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Applications of Binary Trees button
    Then The user should be directed to the "Applications of Binary trees" of tree Page

  @Tree_S12
  Scenario: The user is able to navigate to a page having an tryEditor from Binary Search Trees Page
    Given The user is on "Binary Search Trees" after logged in Tree page

  @Tree_S13
  Scenario: The user is able to navigate to "Implementation of BST" Page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Implementation of BST button
    Then The user should be directed to the "Implementation Of BST" of tree Page

  @Tree_S14
  Scenario: The user validating "Practice Questions" page
    Given The user is on "Tree page" after logged in Tree page
    When The user clicks on the Overview of Trees link in Tree page
    When The user clicks on the Practice Questions in Overview of Trees
    Then The user should be directed to Practice Questions of tree page Page