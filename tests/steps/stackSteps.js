import { arch } from 'os';
import {test} from '../fixtures/fixtures'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);


// 1. Missing step definition for "tests\features\stack.feature:15:5"
When('The user clicks {string} link from main stack page', async ({stackPage}, str) => {
    await stackPage.clickToPgs(str)
    await stackPage.checkURL(str)
  });
  