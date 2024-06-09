import {test} from '../fixtures/fixtures';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);


	
Given('user is on the home page after logged in', async ({Home_Page, page}) => {
    await Home_Page.verifyHomePageUrl()
       
    });
  
  When('The user clicks on the Get Started button below {string}', async ({Home_Page},btnName) =>{
    //await Home_Page.getStartedForModule("Datastructures");

   await Home_Page.getStarted(btnName);


    })
	
    Then('The user is redirected to {string} Page', async ({dataStructurePage}, str) => {
       // console.log(str)
       console.log(`Expected to redirect to: ${str}`);
        await dataStructurePage.checkURL(str)
       

    });
  
	When("The user clicks on the Time Complexity link", async({dataStructurePage}) => {
       await dataStructurePage.timeComplexityClick();
    })  
  
    When('the user clicks on Practice Questions link', async ({dataStructurePage}) => {
        await dataStructurePage.practiceQuestionsClick()
    });
  
    Then('The user goes back to previous Page {string}', async ({dataStructurePage, page}, str) => {
       // await dataStructurePage.navigateTo(page, str)
       console.log(`Expected to go back to: ${str}`);
       await dataStructurePage.navigateTo(page, str);
       
      });
    

    When('The user clicks the Try here link', async ({dataStructurePage}) => {
        await dataStructurePage.tryHereClick()
    });

    
    Then('The user is in a page having an Editor with a Run button to test in {string} page', async ({dataStructurePage}, str) => {
       // console.log("url", Url)
        //await dataStructurePage.checkURL(Url)
        console.log(`Expected to be in: ${str}`);
        await dataStructurePage.checkURL(str);      
    
      });

    When('The user enters valid python code in Editor from sheet {string} and {int}', async ({genericPage}, sheetName, rowNum) => {
        await genericPage.enterCodeToExecute(sheetName, rowNum)
    });

    When('clicks run button', async ({genericPage}) => {
        await genericPage.click_Run()
    });

//'1. Missing step definition for "tests\features\DataStructures.feature:29:5"
Then('The user is presented with the result after clicking run button from sheet {string} and {int}', async ({genericPage}, arg, arg1) => {
  // ...
        console.log('Expected result',genericPage.getExpectedResult(arg,arg1) )
        console.log('Actual result',genericPage.getActualResult() )

    });

    //Invalid python code
  
    When('The user enters invalid python code in Editor from sheet {string} and {int}', async ({genericPage}, arg, arg1) => {
        const msg = await genericPage.enterCodeToExecute(arg, arg1)
        
        console.log(msg)
       
    });
  
      Then('The user gets an error message as {string}', async ({genericPage}, arg) => {
        await genericPage.getErrorMessage(arg)

    });
  
   
