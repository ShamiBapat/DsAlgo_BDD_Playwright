import {expect} from '@playwright/test'
 

 class ArrayPageObj{
    constructor(page){
        this.page = page;

        this.arrayGetStart = page.locator("//a[@href='array']")
        this.arraysInPyton =page.locator("//a[@href='arrays-in-python']")
        this.arrayUsngList = page.locator("//a[normalize-space()='Arrays Using List']")
        this.BasicOperationsInList=page.locator("//a[normalize-space()='Basic Operations in Lists']")
        this.applicationsOfArray =page.locator("//a[normalize-space()='Applications of Array']")

        this.practiceQuestions =  page.locator("//a[text()='Practice Questions']")
        this.searchTheArray=page.locator("//a[normalize-space()='Search the array']")
        this.maxConsecutiveOne  =page.locator("//a[normalize-space()='Max Consecutive Ones']")
        this.findNumberWithEvenNumber =page.locator("//a[normalize-space()='Find Numbers with Even Number of Digits']")
        this.squaresOfASortedArray=page.locator("//a[contains(text(),'Squares of')]")
        
        this.tryHere =  page.locator("//a[text()='Try here>>>']")
        this.tryEditorforPracticeQ=page.locator("//pre[@role='presentation']");
        this.page.editorInput = page.locator('pre').nth(1)

        this.practiceQ =  page.locator("//a[text()='Practice Questions']")
        this.submit = page.locator("//input[@value='Submit']")
        this.submitErrMsg = page.getByText('Error occurred during submission');
        this.squaresOfASortedArrayErrorMes=page.locator("//pre[@id='output']");
    }
    async enterCodeWithoutExcel(input) {
        await this.page.editorInput.fill(input)
        await this.page.pause()
      }	
    async validateErrormessage(){
        const actualErrorMessage = await this.submitErrMsg.textContent();
        const expectedErrorMessage = 'Error occurred during submission';
        expect(actualErrorMessage).toBe(expectedErrorMessage);
        }
    async validatesquaresOfASortedArrayErrorMes(){
        const actualErrorMessage = await this.squaresOfASortedArrayErrorMes.textContent();
        const expectedErrorMessage = '';
        expect(actualErrorMessage).toBe(expectedErrorMessage);
          }

    
    async clickOnArrays(page){
        await this.arrayGetStart.click();
    }
    async validateTryEditorUrl(){
        const tryEditorurl = process.env.tryEditorUrl;
        await expect(this.page).toHaveURL(tryEditorurl)
      
       

    }
    
    async validateArrayPage(){
        const Array = process.env.Array;
        await expect(this.page).toHaveURL(Array)
      
       

    }
    async checkArraysTitle(page){
        const arrayTitle = await page.title();
        expect(arrayTitle).toBe('Array');
    }
    

	async clickOnArraysInPython(){
        await this.arraysInPyton.click();
    }
    async verifyArraysInPythonPageUrl() {
        const arraysinPython = process.env.ArraysinPython;
        await expect(this.page).toHaveURL(arraysinPython)
        
    }
    async clickOnArrayUsingList(){
        await this.arrayUsngList.click();
    }
    async verifyArrayUsingList(){
        const arraysUsingList = process.env.ArraysUsingList;
        await expect(this.page).toHaveURL(arraysUsingList)
    }

    async clickOnBasicOperationsInList(){
        await this.BasicOperationsInList.click();
    }
    async ValidOnBasicOperationsInList(){
        const basicOperationsinLists = process.env.BasicOperationsinLists;
        await expect(this.page).toHaveURL(basicOperationsinLists)
        
    }
    async clickOnApplicationsOfArray(){
   await this.applicationsOfArray.click();
    }
    async ValidOnApplicationOnArray(){
        const applicationsofArray = process.env.ApplicationsofArray;
        await expect(this.page).toHaveURL(applicationsofArray)
    }
    async tryHereClick() {
		await this.tryHere.click();
	}

    async practiceQuestionsClick() {

		await this.practiceQ.click();
    }
    async clickOnSearchTheArray(){
         await this.searchTheArray.click();
    }
    async clickOnMaxConsecutiveOne(){
        await this.maxConsecutiveOne.click();
    }
    async clickOnFindNumberWithEvenNumber(){
        await this.findNumberWithEvenNumber.click();
    }
    async clickOnSquaresOfASortedArray(){
        await this.squaresOfASortedArray.click();
    }

    async practiceQuestionEditor(){
        await this.tryEditorforPracticeQ.click();
    }
    async clickOnSubmitButton(){
        await this.submit.click();
    }
   
    async checkURL(pagename) { 
        console.log(`Expected page name: ${pagename}`);
        let page_name = pagename.replace(/ /g, '');
        let expectedURL = process.env[page_name];
        console.log(`Expected URL: ${expectedURL}`);
        let actualURL = this.page.url();
        console.log(`Actual URL: ${actualURL}`);
        await expect(actualURL).toBe(expectedURL);
    
        // console.log(pagename)   
        // let page_name = pagename.replace(/ /g,'')
        //    console.log('Process env page_name value ', process.env[page_name])
        //    expect(await this.page).toHaveURL(process.env[page_name]);
    }
    

    async  checkPageTitleArray(page, str) {
		
		let title = await this.page.title()
		console.log('title of the page ', title)
        expect(await this.page).toHaveTitle(str)
	}
   
   
    async navigateToArray( page, pagename) {
        let page_name = await pagename.replace(/ /g,"")
		await page.goto(process.env[page_name]);
      
    }

    async goBack( page) {
        await page.goBack()
    }
}

export{ArrayPageObj}


   
 

