import { arch } from 'os';
import {test} from '../fixtures/fixtures'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

When('User clicks getstarted button below Arrays', async ({arrayPage}) => {
    await arrayPage.clickOnArrays();
  });
  
Then('Then The user is redirected to Array Page', async ({arrayPage}) => {
    await arrayPage.validateArrayPage();
  });
  
Then('User clicks ArrayInPython Page', async ({arrayPage}) => {
 await arrayPage.clickOnArraysInPython();
 await arrayPage.verifyArraysInPythonPageUrl();
  });
  When('The user enters valid python code in Editor from sheet {string} and {int} Array', async ({genericPage}, sheetName, rowNum) => {
    await genericPage.enterCodeToExecute(sheetName, rowNum)
});
When('The user enters invalid python code in Editor from sheet {string} and {int} Array', async ({genericPage}, arg, arg1) => {
  const msg = await genericPage.enterCodeToExecute(arg, arg1)
  console.log(msg)
 
});
When('The user clicks the Array Try here link', async ({dataStructurePage}) => {
  await dataStructurePage.tryHereClick()
});

Then('The user is in a page having an Editor with a Run button to test in {string} Arraypage', async ({dataStructurePage}, str) => {

   console.log(`Expected to be in: ${str}`);
   await dataStructurePage.checkURL(str);      

 });
 When('clicks run button1', async ({genericPage}) => {
  await genericPage.click_Run()
});

Then('The user is presented with the result after clicking run button from sheet {string} and {int} Array', async ({genericPage}, arg, arg1) => {
        console.log('Expected result',genericPage.getExpectedResult(arg,arg1) )
        console.log('Actual result',genericPage.getActualResult() )

    });
Then('user is landed ArrayInPython Page successfully and has title as {string}', async ({arrayPage,page}, str) => {
    await arrayPage.checkPageTitleArray(str)
  });
  
Then('User clicks Arrays Using List Page', async ({arrayPage}) => {
    await arrayPage.clickOnArrayUsingList();
    await arrayPage.verifyArrayUsingList();
  });
 
Then('User clicks Basic Operations in Lists Page', async ({arrayPage}) => {
   await arrayPage.clickOnBasicOperationsInList();
   await arrayPage.ValidOnBasicOperationsInList();
  });
  
Then('User clicks Applications of Array Page', async ({arrayPage}) => {
await arrayPage.clickOnApplicationsOfArray()
  });
  
Then('User clicks PracticeQuestion to practice Search the array question', async ({arrayPage}) => {
    await arrayPage.practiceQuestionsClick();
    await arrayPage.clickOnSearchTheArray();
  });

  When('The user enters python code in Editor from sheet {string} and {int}', async ({genericPage,arrayPage}, arg, arg1) => {
    await arrayPage.practiceQuestionEditor();
    await genericPage.enterCodeToExecute(arg, arg1)
  });
  
Then('User submit answer for practice question', async ({arrayPage}) => {
    await arrayPage.clickOnSubmitButton();
    await arrayPage.validateErrormessage();
});
Then('User clicks PracticeQuestion to practice Max Consecutive Ones question', async ({arrayPage}) => {
    await arrayPage.practiceQuestionsClick();
    await arrayPage.clickOnMaxConsecutiveOne();
  });
Then('User clicks PracticeQuestion findNumberWithEvenNumber question', async ({arrayPage}) => {
    await arrayPage.practiceQuestionsClick();
    await arrayPage.clickOnFindNumberWithEvenNumber();
  });
  
  Then('User clicks PracticeQuestion to squaresOfASortedArray question', async ({arrayPage}) => {
    await arrayPage.practiceQuestionsClick();
    await arrayPage.clickOnSquaresOfASortedArray();
  });
  Then('User submit answer for squaresOfASortedArray practice question', async ({arrayPage}) => {
  await arrayPage.validatesquaresOfASortedArrayErrorMes();
  });
  
  
  