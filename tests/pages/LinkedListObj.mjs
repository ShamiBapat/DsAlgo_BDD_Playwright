import {expect} from '@playwright/test'
class LinkedListPage {
	
	constructor(page){
        this.page = page

		// LinkedListPage
		this.introductionLink = page.locator("//a[@href='introduction']")
		this.creatinglinkedlistLink = page.locator("//a[@href='creating-linked-list']")
		this.typesOfLLLink = page.locator("//a[@href='types-of-linked-list']")
		this.implementLLInPythonLink = page.locator("//a[@href='implement-linked-list-in-python']")
		this.traversalLink = page.locator("//a[@href='traversal']")
		this.insertionLink = page.locator("//a[@href='insertion-in-linked-list']")
		this.deletionLink = page.locator("//a[@href='deletion-in-linked-list']")
		this.practiceQuestionLink =page.locator("//a[@href='/linked-list/practice']")
		this.tryHere =  page.locator("//a[text()='Try here>>>']")
	}

	async navigateTo( page, pagename) {
		let page_name = pagename.replace(/ /g, '');
		let url = process.env[page_name];
		console.log(`Navigating to: ${url}`);
		await page.goto(url);
	
	   }

		async click_introduction() {
			await this.introductionLink.click();
		}

		async click_creatingLinkedList() {
			await this.creatinglinkedlistLink.click();
		}
		async click_typesOflLinkedList() {
			await this.typesOfLLLink.click();
		}

		async click_implementlinkedListInPython() {
			await this.implementLLInPythonLink.click();
		}

		async click_traversal() {
			await this.traversalLink.click();
		}

		async click_insertion() {
			await this.insertionLink.click();
		}

		async click_deletion() {
			await this.deletionLink.click();
		}

		async click_practiceQuestion() {
			await this.practiceQuestionLink.click();
		}
		
		async tryHereClick() {
			await this.tryHere.click();
		}

		async  verifyPageTitle(expectedPageTittle) {
       
			let actualTitle = await this.page.title()
			console.log('actual title of the page : ', actualTitle)
			expect(await this.page).toHaveTitle(expectedPageTittle)
		}
	 
		
		async checkURL(pagename) { 
			console.log(`Expected page name: ${pagename}`);
			let page_name = pagename.replace(/ /g, '');
			let expectedURL = process.env[page_name];
			console.log(`Expected URL: ${expectedURL}`);
			let actualURL = this.page.url();
			console.log(`Actual URL: ${actualURL}`);
			expect(actualURL).toBe(expectedURL);
		
		}
	}
export{LinkedListPage}