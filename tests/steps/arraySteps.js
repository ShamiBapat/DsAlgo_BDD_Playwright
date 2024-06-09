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
  
  
  