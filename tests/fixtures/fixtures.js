import { test as base } from 'playwright-bdd';
import * as Pages from './pages';
//To create your own fixture, use test.extend() to create a new test object that will include it.
// Extend base test ,This new "test" can be used in multiple test files and each of them will get the fixtures.
const{HomePage, SignInPage, RegisterPage, QueuePage, DataStructurePage, GenericPage, ArrayPageObj, TreePage, GraphPage, StackPage} = Pages;


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
    graphPage: createTestfunction(GraphPage),
    stackPage: createTestfunction(StackPage),
    
    }

);