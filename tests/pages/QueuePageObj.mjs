import { expect } from '@playwright/test';
import{readExcelCode, readExcelResult } from '../../CommonUtils/ExcelUtility'


export class QueuePage {

  constructor(page) {
    this.page = page;
    this.pythonQueueImplmentation = page.locator("//a[contains(text(),'Implementation of Queue in Python')]");
    this.tryHerebtn = page.locator("//a[contains(text(),'Try here>>>')]")
    this.practiceQuestnbtn = page.locator("//a[contains(text(),'Practice Questions')]")
    this.page.editorInput = page.locator("(//pre[@class=' CodeMirror-line '])[1]")
    this.runBtn = page.locator("//button[@type='button']")
    this.outputBtn = page.locator("//pre[@id='output']")
}

  async navigateToHomePage(url) {
    await this.page.goto(url);
  }

  async verifyCurrentPageURL(pagename) {
    let page_name = await pagename.replace(/ /g,"")
    console.log("Process env page_name value ", process.env[page_name])
    expect(await this.page).toHaveURL(process.env[page_name]);
}

   async  verifyPageTitle(expectedPageTittle) {
       
    let actualTitle = await this.page.title()
    console.log('actual title of the page : ', actualTitle)
    expect(await this.page).toHaveTitle(expectedPageTittle)
}

  async clickOnPythonQueueImplementation(){

    //const pythonQueueImpLink = await page.$(this.pythonQueueImplmentation);
    //await pythonQueueImpLink.click();

    await this.pythonQueueImplmentation.isVisible();
    await this.pythonQueueImplmentation.click();
  }

  async tryHereClick() {
    await this.tryHerebtn.click();
}
async practiceQuestionsClick() {

    await this.practiceQuestnbtn.click();
}

async goBackToPreviousPage( page) {
    await page.goBack()
}



}

