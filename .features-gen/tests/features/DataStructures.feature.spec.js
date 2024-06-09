/** Generated from: tests\features\DataStructures.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("DataStructures-Introduction feature", () => {

  test.beforeEach(async ({ Given, Home_Page, When, SignIn_Page, page, And, Then, dataStructurePage }) => {
    await Given("user navigate to dsportalapp home page", null, { Home_Page });
    await When("User click on Sign-In buttons", null, { Home_Page });
    await When("User enters valid username and valid password", null, { SignIn_Page, page });
    await And("User click on login button", null, { SignIn_Page });
    await When("The user clicks on the Get Started button below \"Datastructures\"", null, { Home_Page });
    await Then("The user is redirected to \"Data Structures-Introduction\" Page", null, { dataStructurePage });
    await When("The user clicks on the Time Complexity link", null, { dataStructurePage });
  });

  test("DataStructure", async ({ When, dataStructurePage, Then, page }) => {
    await When("The user is redirected to \"Time Complexity\" Page", null, { dataStructurePage });
    await When("the user clicks on Practice Questions link", null, { dataStructurePage });
    await Then("The user is redirected to \"Practice Questions DS\" Page", null, { dataStructurePage });
    await Then("The user goes back to previous Page \"Time Complexity\"", null, { dataStructurePage, page });
  });

  test("entering code", async ({ When, dataStructurePage, Then, genericPage, And }) => {
    await When("The user clicks the Try here link", null, { dataStructurePage });
    await Then("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" page", null, { dataStructurePage });
    await When("The user enters valid python code in Editor from sheet \"pythonCode\" and 5", null, { genericPage });
    await And("clicks run button", null, { genericPage });
    await Then("The user is presented with the result after clicking run button from sheet \"pythonCode\" and 5", null, { genericPage });
  });

  test.describe("The user is presented with error message for invalid code in Editor", () => {

    test("Example #1", async ({ When, dataStructurePage, Then, genericPage, And }) => {
      await When("The user clicks the Try here link", null, { dataStructurePage });
      await Then("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" page", null, { dataStructurePage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1", null, { genericPage });
      await And("clicks run button", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\DataStructures.feature"),
});

const testMetaMap = {
  "DataStructure": {"pickleLocation":"13:2"},
  "entering code": {"pickleLocation":"28:7"},
  "The user is presented with error message for invalid code in Editor|Example #1": {"pickleLocation":"39:7"},
};