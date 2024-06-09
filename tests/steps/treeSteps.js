import {test} from '../fixtures/fixtures'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

Given('The user is on the {string} after logged in Tree page', async ({ treePage, page}, str) => {
  await treePage.navigateTo(page,str)
});

  // When('The user selects Tree item from the drop down menu in Tree page', async ({treePage, page}) => {
	// await treePage.clickOnGetStartInTreePage(page);
  // });

  // Then('The user should be directed to the {string} Page in Tree page', async ({treePage, page}, arg) => {
  //  await treePage.getTreePageTitle(page,arg)
  // });
  
  
  Given('The user is on {string} after logged in Tree page', async ({treePage, page}, arg) => {
    await treePage.navigateTo(page, arg)
  });
  
  
  When('The user clicks on the Overview of Trees link in Tree page', async ({treePage, page}) => {
	await treePage.clickOnoverviewOfTreesPage();
  });
  
  Then('The user should be directed to the {string} of tree Page', async ({treePage, page}, arg) => {
  await treePage.getTreePageTitle(page,arg)
  });

  
  When('The user clicks on the Terminologies button', async ({treePage, page}) => {
	await treePage.clickOnTerminologiesLink();   
  });
  
  
  When('The user clicks on the Types of Trees button', async ({treePage, page}) => {
     await treePage.clickOnTypesOfTreesPage();
  });
  
  When('The user clicks on the Tree Traversals button', async ({treePage, page}) => {
 	await treePage.clickOnTreeTraversalsLink();  
  });
  
  When('The user clicks on the Traversal illustration button', async ({treePage, page}) => {
	await treePage.clickOnTrav_illus_Link();   
  });
  
  When('The user clicks on the binary trees button', async ({treePage, page}) => {
	await treePage.clickOnBinaryTreesLink();  
  });

  When('The user clicks on the types of binary trees button', async ({treePage}) => {
 	await treePage.clickOnTypesOfBTLink();   
  });
  
  When('The user clicks on the Implementation in Python button', async ({treePage, page}) => {
	await treePage.click_implementationinPython();   
  });
  
  When('The user clicks on the binary tree traversals button', async ({treePage, page}) => {
	await treePage.click_binaryTreeTraversals();  
  });
  
  When('The user clicks on the Implementation of Binary Trees button', async ({treePage, page}) => {
	await treePage.click_implementationOfBinaryTrees(); 
  });

  When('The user clicks on the Applications of Binary Trees button', async ({treePage, page}) => {
 	await treePage.click_applicationsOfBinaryTrees();  
  });

  When('The user clicks on the Binary Search Trees button', async ({treePage, page}) => {
	await treePage.click_binarySearchTrees();    
  })

  When('The user clicks on the Implementation of BST button', async ({treePage, page}) => {
	await treePage.click_implementationOfBST();
  });
  
  When('The user clicks on the Practice Questions in Overview of Trees', async ({treePage, page}) => {
 	await treePage.click_practiceQuestion();
  });
  
  Then('The user should be directed to Practice Questions of tree page Page', async ({treePage, page}, str) => {
	await treePage.checkURL(page, "treepracticequrl")
  });
