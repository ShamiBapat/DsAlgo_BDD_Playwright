/** Generated from: tests\features\DataStructures.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe.only("DataStructures-Introduction feature", () => {

  test.beforeEach(async ({ Given, Home_Page, When, SignIn_Page, page, And, Then, dataStructurePage }) => {
    await Given("user navigate to dsportalapp home page", null, { Home_Page });
    await When("User click on Sign-In buttons", null, { Home_Page });
    await When("User enters valid username and valid password", null, { SignIn_Page, page });
    await And("User click on login button", null, { SignIn_Page });
    await Given("user is on the home page after logged in with success message \"You are logged in\"", null, { Home_Page });
    await When("The user clicks on the Get Started button below \"Data Structures\"", null, { Home_Page });
    await Then("The user is redirected to \"DataStructures-Introduction\" Page", null, { dataStructurePage, page });
    await When("The user clicks on the Time Complexity link", null, { dataStructurePage });
    await Then("The user is redirected to \"Time Complexity\" Page", null, { dataStructurePage, page });
    await When("the user clicks on Practice Questions link", null, { dataStructurePage });
    await Then("The user is redirected to \"Practice Questions DS\" Page", null, { dataStructurePage, page });
    await Then("The user goes back to previous Page \"Time Complexity\"", null, { dataStructurePage, page });
    await When("The user clicks the Try here link", null, { dataStructurePage, page });
    await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" page", null, { dataStructurePage, page });
  });

  test("Navigating to DataStructures-Introduction page", { tag: ["@only", "@DataStructures2"] }, async ({ When, genericPage, And, Then }) => {
    await When("The user enters valid python code in Editor from sheet \"pythonCode\" and 5", null, { genericPage });
    await And("clicks run button", null, { genericPage });
    await Then("The user is presented with the result after run button is clicked from sheet \"pythonCode\" and 5", null, { genericPage });
  });

  test.describe("The user is presented with error message for invalid code in Editor", () => {

    test("Example #1", { tag: ["@only", "@DataStructures5"] }, async ({ When, genericPage, page, And, Then }) => {
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1", null, { genericPage, page });
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
  "Navigating to DataStructures-Introduction page": {"pickleLocation":"33:7","tags":["@only","@DataStructures2"],"ownTags":["@DataStructures2"]},
  "The user is presented with error message for invalid code in Editor|Example #1": {"pickleLocation":"44:7","tags":["@only","@DataStructures5"]},
};