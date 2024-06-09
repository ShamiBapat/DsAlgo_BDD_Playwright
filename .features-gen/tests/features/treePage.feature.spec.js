/** Generated from: tests\features\treePage.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("User tests the Tree page on the Ds algo application", () => {

  test.beforeEach(async ({ Given, Home_Page, When, SignIn_Page, page, And }) => {
    await Given("user navigate to dsportalapp home page", null, { Home_Page });
    await When("User click on Sign-In buttons", null, { Home_Page });
    await When("User enters valid username and valid password", null, { SignIn_Page, page });
    await And("User click on login button", null, { SignIn_Page });
  });

  test("Tree scenarios", { tag: ["@Tree", "@Tree_S1"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on the \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Overview of Trees link in Tree page", null, { treePage, page });
    await Then("The user should be directed to the \"Overview of Trees\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to \"Terminologies\" Page", { tag: ["@Tree", "@Tree_S2"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Terminologies button", null, { treePage, page });
    await Then("The user should be directed to the \"Terminologies\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to \"Types of Trees\" Page", { tag: ["@Tree", "@Tree_S3"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Types of Trees button", null, { treePage, page });
    await Then("The user should be directed to the \"Types of Trees\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to \"Tree Traversals\" Page", { tag: ["@Tree", "@Tree_S4"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Tree Traversals button", null, { treePage, page });
    await Then("The user should be directed to the \"Tree Traversals\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to \"Traversals illustration\" Page", { tag: ["@Tree", "@Tree_S5"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Traversal illustration button", null, { treePage, page });
    await Then("The user should be directed to the \"Traversals-Illustration\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to \"Binary trees\" Page", { tag: ["@Tree", "@Tree_S6"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the binary trees button", null, { treePage, page });
    await Then("The user should be directed to the \"Binary Trees\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to \"Types of Binary trees\" Page", { tag: ["@Tree", "@Tree_S7"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the types of binary trees button", null, { treePage });
    await Then("The user should be directed to the \"Types of Binary Trees\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to Implementation in Python Page", { tag: ["@Tree", "@Tree_S8"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Implementation in Python button", null, { treePage, page });
    await Then("The user should be directed to the \"Implementation in Python\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to binary tree traversals Page", { tag: ["@Tree", "@Tree_S9"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the binary tree traversals button", null, { treePage, page });
    await Then("The user should be directed to the \"Binary Tree Traversals\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to Implementation of Binary Trees Page", { tag: ["@Tree", "@Tree_S10"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Implementation of Binary Trees button", null, { treePage, page });
    await Then("The user should be directed to the \"Implementation of Binary Trees\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to Applications of Binary Trees Page", { tag: ["@Tree", "@Tree_S11"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Applications of Binary Trees button", null, { treePage, page });
    await Then("The user should be directed to the \"Applications of Binary trees\" of tree Page", null, { treePage, page });
  });

  test("The user is able to navigate to a page having an tryEditor from Binary Search Trees Page", { tag: ["@Tree", "@Tree_S12"] }, async ({ Given, treePage, page }) => {
    await Given("The user is on \"Binary Search Trees\" after logged in Tree page", null, { treePage, page });
  });

  test("The user is able to navigate to \"Implementation of BST\" Page", { tag: ["@Tree", "@Tree_S13"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Implementation of BST button", null, { treePage, page });
    await Then("The user should be directed to the \"Implementation Of BST\" of tree Page", null, { treePage, page });
  });

  test("The user validating \"Practice Questions\" page", { tag: ["@Tree", "@Tree_S14"] }, async ({ Given, treePage, page, When, Then }) => {
    await Given("The user is on \"Tree page\" after logged in Tree page", null, { treePage, page });
    await When("The user clicks on the Overview of Trees link in Tree page", null, { treePage, page });
    await When("The user clicks on the Practice Questions in Overview of Trees", null, { treePage, page });
    await Then("The user should be directed to Practice Questions of tree page Page", null, { treePage, page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\treePage.feature"),
});

const testMetaMap = {
  "Tree scenarios": {"pickleLocation":"11:3","tags":["@Tree","@Tree_S1"],"ownTags":["@Tree_S1"]},
  "The user is able to navigate to \"Terminologies\" Page": {"pickleLocation":"17:3","tags":["@Tree","@Tree_S2"],"ownTags":["@Tree_S2"]},
  "The user is able to navigate to \"Types of Trees\" Page": {"pickleLocation":"24:3","tags":["@Tree","@Tree_S3"],"ownTags":["@Tree_S3"]},
  "The user is able to navigate to \"Tree Traversals\" Page": {"pickleLocation":"30:3","tags":["@Tree","@Tree_S4"],"ownTags":["@Tree_S4"]},
  "The user is able to navigate to \"Traversals illustration\" Page": {"pickleLocation":"36:3","tags":["@Tree","@Tree_S5"],"ownTags":["@Tree_S5"]},
  "The user is able to navigate to \"Binary trees\" Page": {"pickleLocation":"42:3","tags":["@Tree","@Tree_S6"],"ownTags":["@Tree_S6"]},
  "The user is able to navigate to \"Types of Binary trees\" Page": {"pickleLocation":"48:3","tags":["@Tree","@Tree_S7"],"ownTags":["@Tree_S7"]},
  "The user is able to navigate to Implementation in Python Page": {"pickleLocation":"54:3","tags":["@Tree","@Tree_S8"],"ownTags":["@Tree_S8"]},
  "The user is able to navigate to binary tree traversals Page": {"pickleLocation":"60:3","tags":["@Tree","@Tree_S9"],"ownTags":["@Tree_S9"]},
  "The user is able to navigate to Implementation of Binary Trees Page": {"pickleLocation":"66:3","tags":["@Tree","@Tree_S10"],"ownTags":["@Tree_S10"]},
  "The user is able to navigate to Applications of Binary Trees Page": {"pickleLocation":"72:3","tags":["@Tree","@Tree_S11"],"ownTags":["@Tree_S11"]},
  "The user is able to navigate to a page having an tryEditor from Binary Search Trees Page": {"pickleLocation":"78:3","tags":["@Tree","@Tree_S12"],"ownTags":["@Tree_S12"]},
  "The user is able to navigate to \"Implementation of BST\" Page": {"pickleLocation":"82:3","tags":["@Tree","@Tree_S13"],"ownTags":["@Tree_S13"]},
  "The user validating \"Practice Questions\" page": {"pickleLocation":"88:3","tags":["@Tree","@Tree_S14"],"ownTags":["@Tree_S14"]},
};