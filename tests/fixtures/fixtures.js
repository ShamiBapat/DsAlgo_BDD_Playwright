import { test as base } from 'playwright-bdd';
//import { HomePage } from '../pages/HomePageObj.mjs'
//import { SignInPage } from '../pages/SignInPageObj.mjs'
import * as Pages from './pages';
//To create your own fixture, use test.extend() to create a new test object that will include it.
// Extend base test ,This new "test" can be used in multiple test files and each of them will get the fixtures.
<<<<<<< HEAD
const{HomePage, SignInPage, RegisterPage, QueuePage, DataStructurePage, GenericPage, ArrayPageObj, TreePage, LinkedListPage} = Pages;
=======
const{HomePage, SignInPage, RegisterPage, QueuePage, DataStructurePage, GenericPage, ArrayPageObj, TreePage, GraphPage} = Pages;
>>>>>>> 4f36982dc01f8933f56216d8610da75c215e4f73

const createTestfunction = (PageClass) => async({page},use)=>{
        await use(new PageClass(page));
}

export const test = base.extend({
          
    Home_Page : createTestfunction(HomePage),
    SignIn_Page : createTestfunction(SignInPage),
    registerPage : createTestfunction(RegisterPage),
    Queue_Page : createTestfunction(QueuePage),
    dataStructurePage: createTestfunction(DataStructurePage),
    genericPage: createTestfunction(GenericPage),
    arrayPage: createTestfunction(ArrayPageObj),
    treePage: createTestfunction(TreePage),
<<<<<<< HEAD
    LLPage: createTestfunction(LinkedListPage),
=======
    graphPage: createTestfunction(GraphPage)
>>>>>>> 4f36982dc01f8933f56216d8610da75c215e4f73
    
   }
);