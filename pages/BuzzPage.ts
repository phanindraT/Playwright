import { Page, Locator } from '@playwright/test'

export class BuzzPage{
    readonly buzzButton : Locator;

    constructor(private page : Page){
        this.buzzButton = this.page.getByRole('link', { name: 'Buzz' });
    }

    async navigate(){
       await this.page.goto('web/index.php/pim/viewEmployeeList');
     }

    async clickOnbuzz(){
         await this.buzzButton.click();
    }
}