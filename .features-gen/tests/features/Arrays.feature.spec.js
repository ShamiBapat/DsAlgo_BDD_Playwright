/** Generated from: tests\features\Arrays.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("Array Validations feature", () => {

  test.beforeEach(async ({ Given, Home_Page, When, SignIn_Page, page, And, arrayPage, Then }) => {
    await Given("user navigate to dsportalapp home page", null, { Home_Page });
    await When("User click on Sign-In buttons", null, { Home_Page });
    await When("User enters valid username and valid password", null, { SignIn_Page, page });
    await And("User click on login button", null, { SignIn_Page });
    await When("User clicks getstarted button below Arrays", null, { arrayPage });
    await Then("Then The user is redirected to Array Page", null, { arrayPage });
  });

  test("validating Arrays in python page with valid data", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
    await Then("User clicks ArrayInPython Page", null, { arrayPage });
    await When("The user clicks the Array Try here link", null, { arrayPage });
    await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
    await When("The user enters valid python code in Editor from sheet \"pythonCode\" and 5 Array", null, { genericPage });
    await And("clicks run button1", null, { genericPage });
    await Then("The user is presented with the result after clicking run button from sheet \"pythonCode\" and 5 Array", null, { genericPage });
  });

  test("validating Arrays in python page with invalid data", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
    await Then("User clicks ArrayInPython Page", null, { arrayPage });
    await When("The user clicks the Array Try here link", null, { arrayPage });
    await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
    await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
    await And("clicks run button1", null, { genericPage });
    await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
  });

  test.describe("validating Arrays Using List page with valid data", () => {

    test("Example #1", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
      await Then("User clicks Arrays Using List Page", null, { arrayPage });
      await When("The user clicks the Array Try here link", null, { arrayPage });
      await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
      await When("The user enters valid python code in Editor from sheet \"pythonCode\" and 5 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user is presented with the result after clicking run button from sheet \"pythonCode\" and 5 Array", null, { genericPage });
    });

  });

  test.describe("validating  Arrays Using List Page page with invalid data", () => {

    test("Example #1", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
      await Then("User clicks Arrays Using List Page", null, { arrayPage });
      await When("The user clicks the Array Try here link", null, { arrayPage });
      await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
    });

  });

  test("validating Basic Operations in Lists page with valid data", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
    await Then("User clicks Basic Operations in Lists Page", null, { arrayPage });
    await When("The user clicks the Array Try here link", null, { arrayPage });
    await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
    await When("The user enters valid python code in Editor from sheet \"pythonCode\" and 5 Array", null, { genericPage });
    await And("clicks run button1", null, { genericPage });
    await Then("The user is presented with the result after clicking run button from sheet \"pythonCode\" and 5 Array", null, { genericPage });
  });

  test.describe("validating Basic Operations in Lists page with invalidData", () => {

    test("Example #1", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
      await Then("User clicks Basic Operations in Lists Page", null, { arrayPage });
      await When("The user clicks the Array Try here link", null, { arrayPage });
      await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
    });

  });

  test("validating Applications of Array page with valid data", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
    await Then("User clicks Applications of Array Page", null, { arrayPage });
    await When("The user clicks the Array Try here link", null, { arrayPage });
    await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
    await When("The user enters valid python code in Editor from sheet \"pythonCode\" and 5 Array", null, { genericPage });
    await And("clicks run button1", null, { genericPage });
    await Then("The user is presented with the result after clicking run button from sheet \"pythonCode\" and 5 Array", null, { genericPage });
  });

  test.describe("validating Applications of Array with invalidData", () => {

    test("Example #1", async ({ Then, arrayPage, When, Given, genericPage, And }) => {
      await Then("User clicks Applications of Array Page", null, { arrayPage });
      await When("The user clicks the Array Try here link", null, { arrayPage });
      await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" Arraypage", null, { arrayPage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
    });

  });

  test.describe("Practice Search the array Question", () => {

    test("Example #1", async ({ Then, arrayPage, When, genericPage, And }) => {
      await Then("User clicks Applications of Array Page", null, { arrayPage });
      await Then("User clicks PracticeQuestion to practice Search the array question", null, { arrayPage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
      await Then("User submit answer for practice question", null, { arrayPage });
    });

  });

  test.describe("Practice  Max Consecutive Ones Question", () => {

    test("Example #1", async ({ Then, arrayPage, When, genericPage, And }) => {
      await Then("User clicks Applications of Array Page", null, { arrayPage });
      await Then("User clicks PracticeQuestion to practice Max Consecutive Ones question", null, { arrayPage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
      await Then("User submit answer for practice question", null, { arrayPage });
    });

  });

  test.describe("Practice  findNumberWithEvenNumber Question", () => {

    test("Example #1", async ({ Then, arrayPage, When, genericPage, And }) => {
      await Then("User clicks Applications of Array Page", null, { arrayPage });
      await Then("User clicks PracticeQuestion findNumberWithEvenNumber question", null, { arrayPage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
      await Then("User submit answer for practice question", null, { arrayPage });
    });

  });

  test.describe("Practice  squaresOfASortedArray Question", () => {

    test("Example #1", async ({ Then, arrayPage, When, genericPage, And }) => {
      await Then("User clicks Applications of Array Page", null, { arrayPage });
      await Then("User clicks PracticeQuestion to squaresOfASortedArray question", null, { arrayPage });
      await When("The user enters invalid python code in Editor from sheet \"pythonCode\" and 1 Array", null, { genericPage });
      await And("clicks run button1", null, { genericPage });
      await Then("The user gets an error message as \"NameError: name 'String' is not defined on line 1\"", null, { genericPage });
      await Then("User submit answer for squaresOfASortedArray practice question", null, { arrayPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\Arrays.feature"),
});

const testMetaMap = {
  "validating Arrays in python page with valid data": {"pickleLocation":"23:7"},
  "validating Arrays in python page with invalid data": {"pickleLocation":"37:7"},
  "validating Arrays Using List page with valid data|Example #1": {"pickleLocation":"48:7"},
  "validating  Arrays Using List Page page with invalid data|Example #1": {"pickleLocation":"60:7"},
  "validating Basic Operations in Lists page with valid data": {"pickleLocation":"71:7"},
  "validating Basic Operations in Lists page with invalidData|Example #1": {"pickleLocation":"85:7"},
  "validating Applications of Array page with valid data": {"pickleLocation":"97:7"},
  "validating Applications of Array with invalidData|Example #1": {"pickleLocation":"111:7"},
  "Practice Search the array Question|Example #1": {"pickleLocation":"125:7"},
  "Practice  Max Consecutive Ones Question|Example #1": {"pickleLocation":"137:7"},
  "Practice  findNumberWithEvenNumber Question|Example #1": {"pickleLocation":"150:7"},
  "Practice  squaresOfASortedArray Question|Example #1": {"pickleLocation":"162:7"},
};