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
        
        this.practiceQ =  page.locator("//a[text()='Practice Questions']")
        this.submit = page.locator("//input[@value='Submit']")
        this.submitErrMsg = page.getByText('Error occurred during submission');
        this.squaresOfASortedArrayErrorMes=page.locator("//pre[@id='output']");
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

    async validateArrayPage(){
        const Array = process.env.Array;
        await expect(this.page).toHaveURL(Array)
      
       // await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/array/');

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
        //await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/array/arrays-in-python/');
    }
    async clickOnArrayUsingList(){
        await this.arrayUsngList.click();
    }
    async verifyArrayUsingList(){
        const arraysUsingList = process.env.ArraysUsingList;
        await expect(this.page).toHaveURL(arraysUsingList)
        //await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/array/arrays-using-list/')
    }

    async clickOnBasicOperationsInList(){
        await this.BasicOperationsInList.click();
    }
    async ValidOnBasicOperationsInList(){
        const basicOperationsinLists = process.env.BasicOperationsinLists;
        await expect(this.page).toHaveURL(basicOperationsinLists)
        //await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/array/basic-operations-in-lists/')
    }
    async clickOnApplicationsOfArray(){
   await this.applicationsOfArray.click();
    }
    async ValidOnApplicationOnArray(){
        const applicationsofArray = process.env.ApplicationsofArray;
        await expect(this.page).toHaveURL(applicationsofArray)
        //await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/array/applications-of-array/')
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
   

    async  checkPageTitleArray(page, str) {
		
		let title = await this.page.title()
		console.log('title of the page ', title)
        expect(await this.page).toHaveTitle(str)
	}
    async checkUrlArray(page, pagename){
   
    let page_name = await   pagename.replace(/ /g,"")
        console.log("Process env page_name value ", process.env[page_name])
		expect(await this.page).toHaveURL(process.env[page_name]);
       
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


   
 

