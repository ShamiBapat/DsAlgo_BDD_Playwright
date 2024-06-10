import {expect} from '@playwright/test'

class StackPage{

    constructor(page){
        this.page = page;
        this.operations = page.locator('//a[normalize-space()="Operations in Stack"]');
        this.implement = page.locator('//a[normalize-space()="Implementation"]');
        this.app = page.locator('//a[normalize-space()="Applications"]');
 
    }
 
    async clickToPgs(pgs) {
     if (pgs === "Operations in Stack"){
         await this.operations.click();
     }
         else if (pgs === "Implementation"){
             await this.implement.click();
         }
 
         else if (pgs === "Applications"){
             await this.app.click();
         } 
         else
			console.log("Page cannot be found-Graph"); 
     }
 
     async checkURL(pagename) { 
         console.log(`Expected page name: ${pagename}`);
         let page_name = pagename.replace(/ /g, '');
         let expectedURL = process.env[page_name];
         console.log(`Expected URL: ${expectedURL}`);
         let actualURL = this.page.url();
         console.log(`Actual URL: ${actualURL}`);
         await expect(actualURL).toBe(expectedURL);
    }
 
 
 }

export {StackPage}