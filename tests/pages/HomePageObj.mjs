import { expect } from '@playwright/test';

export class HomePage {

  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.registerLink = page.getByRole('link', { name: ' Register ' });
    this.signOutLink = page.getByRole('link', { name: 'Sign out' });
    this.notloggedInErrMsg = page.getByText('You are not logged in');
    this.loggedInMsg = page.locator('//a[contains(text(),"You are logged in")]');
    this.dataStrDropDown = page.locator('//a[text()="Data Structures"]');
    this.dataStrDDMenu =  page.locator('//div[contains(@class,"dropdown-menu")]/a');
    this.getStartedBtn = page.getByText('Get Started');


    //this.page.getStarted = page.locator("//button[text()='Get Started']")

		//this.page.getstarted_DS = page.locator("//a[@href='data-structures-introduction']")
		this.page.getstarted_DS = page.locator('//a[@href="data-structures-introduction"]')
		this.page.getstarted_Array = page.locator("//a[@href='array']")
		this.page.getstarted_LL = page.locator("//a[@href='linked-list']")
		this.page.getstarted_stack = page.locator("//a[@href='stack']")
		this.page.getstarted_queue = page.locator("//a[@href='queue']")
		this.page.getstarted_tree = page.locator("//a[@href='tree']")
		this.page.getstarted_graph = page.locator("//a[@href='graph']")
		
		//webelement for user not logged in alert msg
		this.page.alertmsg = page.locator("//div[@class='alert alert-primary']")
		
		//webelements for dropdown
		this.page.dropdown_DS = page.locator("//a[text()='Data Structures']")
		this.page.dropdown_array = page.locator("//a[text()='Arrays']")
		this.page.dropdown_linkedlist = page.locator("//a[text()='Linked List']")
		this.page.dropdown_stack = page.locator("//a[text()='Stack']")
		this.page.dropdown_queue = page.locator("//a[text()='Queue']")
		this.page.dropdown_tree = page.locator("//a[text()='Tree']")
		this.page.dropdown_graph = page.locator("//a[text()='Graph']")
		
		//Webelement for register
		this.page.register = page.locator("//a[@href='/register']")
		this.page.login = page.locator("//a[@href='/login']")
		
	

  }
  async navigateToHomePage(url) {

    await this.page.goto(url);
  }

  async checkHomeUrl(url) {

	// Log the expected URL from the environment variable
		let expectedURL = process.env.HOME_URL;
		console.log(`Expected URL: ${expectedURL}`);
		
		// Get the actual URL from the page
		let actualURL = await this.page.url(); // Ensure we await the async operation
		console.log(`Actual URL: ${actualURL}`);
		
		// Check if the actual URL matches the expected URL
		expect(actualURL).toBe(expectedURL);
	}
	

   // await expect(this.page).toBe(url);
	
		//console.log(`Expected page name:` {homepage});
		//let page_name = homepage.replace(/ /g, '');
		// let expectedURL = process.env.HOME_URL;
		// console.log(`Expected URL: ${expectedURL}`);
		// let actualURL = this.page.url();
		// console.log(`Actual URL: ${actualURL}`);
		//  expect(actualURL).toBe(expectedURL);
  

  
  async getPageTitle() {
    return await this.page.title();
}


  async verifyHomePageUrl() {
     expect(await this.page).toHaveURL('https://dsportalapp.herokuapp.com/home');
}
  async signInIsVisisble() {

    await this.signInLink.isVisible();
  }
  async registerIsVisisble() {

    await this.registerLink.isVisible();
  }

async signInIsEnabled() {

  await this.signInLink.isEnabled();
}
async registerIsEnabled() {

  await this.registerLink.isEnabled();
}
async clickOnSignIn() {
  await this.signInLink.click();
}

async clickOnSignOut() {
  await this.signOutLink.click();
}
async clickOnRegister() {
  await this.registerLink.click();
}
  async loggedInErrMsgNotVisisble() {
    expect(await this.notloggedInErrMsg.count()).toEqual(0);
  }

  async loggedInSuccessMsgVisisble() {
    //expect(await this.loggedInMsg.count()).toEqual(1);
    //await expect(this.page.getByRole('alert', { name: 'You are logged in' }).count()).toBeGreaterThan(0);
      
  }

  async clickOnGetStarteBtn() {
    await this.getStartedBtn.last().click();
  }
  async loggedInErrMsgVisisble() {
    expect(await this.notloggedInErrMsg.count()).toBeGreaterThan(0);
    
  }

  async clickOnDataStrDD() {
    await this.dataStrDropDown.click();
  }
  async dataStrDDMenuCount() {
    
    expect(await this.dataStrDDMenu.count()).toBe(6);

  }

//generic method to click on specific get strted module btn


  async  getStarted(string) {
	
		switch(string){
		case "Datastructures":
			//await this.page.getstarted_DS.isVisible();
			
			await this.page.getstarted_DS.click();
			break;
		case "Arrays":
			
			await this.page.getstarted_Array.click();
			break;
		case "Linkedlist":
			
			await this.page.getstarted_LL.click();
			break;
		case "Stack":
			
			await this.page.getstarted_stack.click();
			break;
		case "Queue":
			
			await this.page.getstarted_queue.click();
			break;
		case "Tree":
			
			await this.page.getstarted_tree.click();
			break;
		case "Graph":
			
			await this.page.getstarted_graph.click();
			break;
		case "Default":
			break;
		}
	}
	
	async alertmsg() {
		
		let msg= await this.page.alertmsg.getText();
		console.log('Alert msg ', msg)
		return msg;
	}
	
	
	//dropdown options
	async  dropdown(string) {

		await this.page.dropdown_DS.click();
		switch (string) {
		
		case "Arrays":
			await this.page.dropdown_array.click();
			break;
		
		case "Linkedlist":
			await this.page.dropdown_linkedlist.click();
			break;
		
		case "Stack":
			await this.page.dropdown_stack.click();
			break;
		
		case "Queue":
			await this.page.dropdown_queue.click();
			break;
		
		case "Tree":
			await this.page.dropdown_tree.click();
			break;
		
		case "Graph":
			await this.page.dropdown_graph.click();
			break;
		}


}

}
