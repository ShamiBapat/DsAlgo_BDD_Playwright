import {expect} from '@playwright/test'

class TreePage{
    constructor(page){
        this.page = page

        // this.getstart_datastructures = page.locator("//a[@href='data-structures-introduction']")
        // this.getstart_tree = page.locator("//a[@href='tree']")

        //this.dropdown = page.locator("//*[@id=\"navbarCollapse\"]//a[contains(text(), 'Data Structures')]")
        this.dropdown_tree = page.locator("//*[@id='navbarCollapse']//a[contains(@href, '/tree')]")
        this.overviewOfTreesLink = page.locator("//*[@href='overview-of-trees']")
        this.terminologiesLink = page.locator("//*[@href='terminologies']")
        this.typesoftreesLink = page.locator("//*[@href='types-of-trees']")
        this.treetraversalsLink = page.locator("//*[@href='tree-traversals']")
        this.trav_illustrationsLink= page.locator("//*[@href='traversals-illustration']")
        this.binarytreesLink = page.locator("//*[@href='binary-trees']")
        this.typesofBinaryTreesLink = page.locator("//*[@href='types-of-binary-trees']")
        this.implementationInPythonLink = page.locator("//a[@href='implementation-in-python']")
        this.binaryTreeTraversalsLink = page.locator("//a[@href='binary-tree-traversals']")
        this.implementationOfBinaryTreesLink = page.locator("//a[@href='implementation-of-binary-trees']")
        this.applicationsOfBinaryTreesLink = page.locator("//a[@href='applications-of-binary-trees']")
        this.binarySearchTreesLink = page.locator("//a[@href='binary-search-trees']")
        this.implementationOfBSTLink = page.locator("//a[@href='implementation-of-bst']")
        this.practiceQuestionLink = page.locator("//a[@href='/tree/practice']")
        // this.practiceQuestions =  page.locator("//a[text()='Practice Questions']")
         this.tryHere =  page.locator("//a[text()='Try here>>>']")
        // this.practiceQ =  page.locator("//a[text()='Practice Questions']")
    }

	async checkURL( page, pagename) {
        
        let page_name = await pagename.replace(/ /g,"")
        console.log("Process env page_name value ", process.env[page_name])
		expect(await this.page).toHaveURL(process.env[page_name]);
	}

	async dropdown_Tree() {
		await this.dropdown.click();
		await this.dropdown_tree.click();
	}
	
	async clickOnGetStartInTreePage() {
		await this.getstart_tree.click();
	}

	async getTreePageTitle(page, str) {
        let title = await this.page.title()
		console.log('title of the page ', title)
        expect(await this.page).toHaveTitle(str)
	}

	async clickOnoverviewOfTreesPage() {
		await this.overviewOfTreesLink.click();
	}

	async tryHereClick() {
		await this.tryHere.click();
	}
 
	async practiceQuestionsClick() {
 
		await this.practiceQ.click();
	}
 
	async clickOnTerminologiesLink() {
		await this.terminologiesLink.click();
	}

	async clickOnTypesOfTreesPage() {
		await this.typesoftreesLink.click();
	}

	async clickOnTreeTraversalsLink() {
		await this.treetraversalsLink.click();
	}

	async clickOnTrav_illus_Link() {
		await this.trav_illustrationsLink.click();
	}

	async clickOnBinaryTreesLink() {
		await this.binarytreesLink.click();
	}

	async clickOnTypesOfBTLink() {
		await this.typesofBinaryTreesLink.click();
	}

	async click_implementationinPython() {
		await this.implementationInPythonLink.click();
	}

	async click_binaryTreeTraversals() {
		await this.binaryTreeTraversalsLink.click();
	}

	async click_implementationOfBinaryTrees() {
		await this.implementationOfBinaryTreesLink.click();
	}

	async click_applicationsOfBinaryTrees() {
		await this.applicationsOfBinaryTreesLink.click();
	}

	async click_binarySearchTrees() {
		await this.binarySearchTreesLink.click();
	}

	async click_implementationOfBST() {
		await this.implementationOfBSTLink.click();
	}

	async click_practiceQuestion() {
		await this.practiceQuestionLink.click();
	}
    //********************************** */
    /////////////////////////
	// async navigateToHomePage() {
	// 	driver.get(homepage);
	// }
	async navigateTo(page, pagename) {
		console.log('Tree page obj line NavigateTo ', pagename)
        let page_name = await pagename.replace(/ /g,"")
		console.log('Tree navigate ', process.env[page_name])
		await page.goto(process.env[page_name]);
	}

    async goBack( page) {
        await page.goBack()
    }
}
export{TreePage}
