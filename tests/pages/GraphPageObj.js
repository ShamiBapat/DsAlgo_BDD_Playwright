
import {expect} from '@playwright/test'

class GraphPage{

    constructor(page){
        this.page = page;
        this.getstarted_graph = page.locator("//a[@href='graph']");
        this.graphlink = page.locator("//a[@class='list-group-item'][normalize-space()='Graph']");
	    this.graphrepresentation = page.locator("//a[normalize-space()='Graph Representations']");
		this.practiceQuestions = page.locator("//a[normalize-space()='Practice Questions']");
    }
    async getStartedGraphClick() {
		await this.getstarted_graph.click();
	  }
    async navigatethru_graphPage(pageName) {
		
		if(pageName ==="Graph")
		{
			await this.graphlink.click();
		}
		else if(pageName === "Graph Representations")
		{
			await this.graphrepresentation.click();
		}
		else if(pageName ==="Practice Questions")
			{
				await this.practiceQuestions.click();
			}
		else
			console.log("Page cannot be found-Graph");
	}

    }
    export{GraphPage};
