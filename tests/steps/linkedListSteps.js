import {test} from '../fixtures/fixtures'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

    
When('The user clicks Introduction link', async ({LLPage}) => {
	    await LLPage.click_introduction();
      });
  
  Then('The user should be directed to {string} of Linked List Page', async ({LLPage}, arg) => {
    await LLPage.verifyPageTitle(arg)
  });
  
  When('The user clicks {string} button in the {string} page', async ({LLPage}, arg, arg1) => {
    await LLPage.tryHereClick(arg, arg1)
  });
  
  // Then('The user redirected to the page having an tryEditor with a Run button to test', async ({LLPage}) => {
  //   await LLPage.checkURL()
  // });
  
    
  When('The user clicks creating linked list link', async ({LLPage}) => {
  await LLPage.click_creatingLinkedList()
  });
  
  // Then('The user should be redirected to a page having an tryEditor with a Run button to test', async ({LLPage}) => {
  //   console.log(`Expected to be in: ${str}`);
  //   await LLPage.checkURL(str);      
  // });
  
  When('The user clicks the Types of Linked List button', async ({LLPage}) => {
    await LLPage.click_typesOflLinkedList()
  });
  
  When('The user clicks the Implement Linked List in Python button', async ({LLPage}) => {
    await LLPage.click_implementlinkedListInPython()
    });
  
  When('The user clicks the Traversal button', async ({LLPage}) => {
    await LLPage.click_traversal()
  });
  
  When('The user clicks the Insertion button', async ({LLPage}) => {
    await LLPage.click_insertion()
  });
  
  When('The user clicks the Deletion button', async ({LLPage}) => {
    await LLPage.click_deletion()
  });
  
  When('The user clicks on the Practice Questions', async ({LLPage}) => {
    await LLPage.click_practiceQuestion()
  });
  
    Given('The user is on the {string} after logged in LL', async ({LLPage}, arg) => {
      console.log('line 57 LL steps ',arg )
      await LLPage.checkURL(arg)
  });
  
  When('The user clicks getstarted for {string} module', async ({Home_Page}, arg) => {
    await Home_Page.getStarted(arg);
  });
  
  Then('The user redirected to {string}  Page', async ({LLPage}, arg) => {
    console.log('arg before checkurl line 66 ', arg)
    await LLPage.checkURL(arg)
  });
  
  Then('The user is presented with the result after run button is clicked', async ({LLPage}) => {
    
  });
  
  Given('The user is on the {string} after logged', async ({Home_Page}, arg) => {
    await Home_Page.verifyHomePageUrl(arg)
});


When('The user clicks try here button in the introduction page', async ({LLPage}) => {
  await LLPage.tryHereClick()
});

When('The user clicks try here button in the creating linked list page', async ({LLPage}) => {
  await LLPage.tryHereClick()
});

When('The user clicks Try Here button in the types of linked list page', async ({LLPage}) => {
  await LLPage.tryHereClick()
});

When('The user clicks Try Here button in the implemented linked list in python page', async ({LLPage}) => {
  await LLPage.tryHereClick()
});

When('The user clicks Try Here button in the traversal page', async ({LLPage}) => {
  await LLPage.tryHereClick()
});

When('The user clicks Try Here button in the Insertion page', async ({LLPage}) => {
  await LLPage.tryHereClick()
});

When('The user clicks Try Here button in the Deletion page', async ({LLPage}) => {
  await LLPage.tryHereClick()
});
