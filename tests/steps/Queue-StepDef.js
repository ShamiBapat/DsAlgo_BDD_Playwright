import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures';
import {expect} from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('user is already on dsportalapp home page', async ({Home_Page}) => {
    await Home_Page.loggedInSuccessMsgVisisble();
    console.log(Home_Page.loginSuccessMsg);
});

  When('user navigate to data-structures dropdown', async ({Home_Page,page}) => {
    //page.pause();
    await Home_Page.clickOnDataStrDD();
    
});
  
  When('user click the queue menu {string} from drop down', async ({Home_Page}, ddMenuItem) => {
              console.log("click on queue from dd")
              await Home_Page.clickOnDataStrDD();
             await Home_Page.dropdown(ddMenuItem);
  });
  
  Then('user should redirect to {string} page', async ({Queue_Page},pageTitle) => {
            
          await Queue_Page.verifyPageTitle(pageTitle)
          await Queue_Page.verifyCurrentPageURL(pageTitle)
  });
  
  When('user click the queue {string} GetStarted button', async ({Home_Page},btnName) => {
            await Home_Page.getStarted(btnName)
  });
  
  Given('user is already on Queue page', async ({Queue_Page}) => {
    await Queue_Page.verifyPageTitle("Queue")
  });
  
  When('user click on Implementation of Queue in Python link', async ({Queue_Page}) => {

    await Queue_Page.clickOnPythonQueueImplementation()
});
  
  Then('user should redirect to {string} in queue page', async ({Queue_Page},pageTitle) => {
              await Queue_Page.verifyPageTitle(pageTitle)
              
  });
  
  When('user clicks on TryHere button from queue', async ({Queue_Page}) => {
                 await Queue_Page.tryHereClick();
  });
  
  Then('user should be redirect to the python editor page with {string}', async ({Queue_Page},pageUrl) => {
        await Queue_Page.verifyCurrentPageURL(pageUrl)
             
  });
  
  When('user enters the invalid input {string} in the editor', async ({genericPage}, invalidInput) => {
    console.log("enter invalid input")
    await genericPage.enterCodeWithoutExcel(invalidInput)
  });
  
  When('user click on RUN button for queue', async ({genericPage}) => {
    await genericPage.click_Run()
  });
  
  Then('user should get an Alert with error Message {string} and user click the alert OK button', async ({genericPage},errMsg) => {
            await genericPage.verifyAlertErrMsgNClikeOkBtn(errMsg)
            
  });
  
  When('for queue user enters valid python code from test sheet {string} and {int}', async ({genericPage}, sheetName, rowNum) => {
            await genericPage.enterCodeToExecute(sheetName, rowNum)

  });
  Then('for queue flow console should display result {string}', async ({genericPage}, arg) => {
    
    console.log('Actual result',genericPage.getActualResult())

  });
  
  
  