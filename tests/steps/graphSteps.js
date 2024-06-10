import {test} from '../fixtures/fixtures';
import { createBdd } from 'playwright-bdd';
import {expect} from '@playwright/test';

const { Given, When, Then } = createBdd(test);

// 1. Missing step definition for "tests\features\Arrays.feature:20:1"
Then('The user is presented with the result after run button is clicked from sheet {string} and {int}', async ({genericPage}, arg, arg1) => {
    console.log('Expected result',genericPage.getExpectedResult(arg,arg1) );
    console.log('Actual result',genericPage.getActualResult() );
  });

  // 1. Missing step definition for "tests\features\graph.feature:11:5"
When('user click the menu {string} from drop down', async ({}, arg) => {
  
});
  
  // 2. Missing step definition for "tests\features\graph.feature:15:5"
  When('The user clicks {string} link from main graph page', async ({graphPage,page}, pagename) => {
    //await page.pause();
    await graphPage.navigatethru_graphPage(pagename);
  });
  
  // 3. Missing step definition for "tests\features\graph.feature:16:5"
  Then('check the title of the page {string}', async ({Home_Page,page}, title) => {
    const pageTitle = await Home_Page.getPageTitle();
    await expect(pageTitle).toBe(title);
  });