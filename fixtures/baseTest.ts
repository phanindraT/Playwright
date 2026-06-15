import {test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';
import { HeaderComponent } from '../pages/components/HeaderComponent';
import { AdminPage } from '../pages/AdminPage';
import { PimFlows } from '../flows/PimFlows';
import { BuzzPage } from '../pages/BuzzPage';
import { DashBoard } from '../pages/DashBoard';


/* 
type MyFixtures ={
    loginpage : LoginPage;
    pimpage : PimPage;
    header : HeaderComponent;
}; */

interface MyFixtures {
   readonly loginpage : LoginPage;
   readonly pimpage : PimPage;
   readonly adminpage:AdminPage;
   readonly header : HeaderComponent;
   readonly pimflows: PimFlows;
   readonly buzzPage : BuzzPage;
   readonly dashBoard : DashBoard;
};


export const test = base.extend<MyFixtures>({
    loginpage : async({page},use)=>{
        await use(new LoginPage(page));
        console.log('use function1'); // 
    },
    pimpage : async({page},use)=>{
        await use(new PimPage(page));
                console.log('use function2');

    },
    header : async({page},use)=>{
        await use(new HeaderComponent(page));
                console.log('use function3');

    },
    adminpage : async({page},use)=>{
        await use(new AdminPage(page));
                console.log('use function4');

    },
    pimflows : async({pimpage},use)=>{
        await use(new PimFlows(pimpage));
    },
    buzzPage : async({page},use)=>{
        await use(new BuzzPage(page));
    },
    dashBoard : async({page},use)=>{
        await use(new DashBoard(page));

    }

});

export {expect} from '@playwright/test';  // re-export expect from baseTest to provide a single import point for test utilities. This keeps test files clean and allows future extension of assertions centrally.
