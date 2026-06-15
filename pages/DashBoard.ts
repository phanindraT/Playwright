import {Page, Locator } from '@playwright/test';

export class DashBoard{
    readonly dashBoardButton : Locator;

    constructor( private page: Page){
        this.dashBoardButton = this.page.getByText('Dashboard', { exact: true });
    }

     async navigate(){
       await this.page.goto('web/index.php/pim/viewEmployeeList');
     }

     async clickButton(){
        await this.dashBoardButton.click();
     }


}