import {test,expect } from '../../fixtures/baseTest'
//import { BuzzPage } from '../../pages/BuzzPage';

test("buzz functionality", async({buzzPage,page})=>{
    //    const buzzPage = new BuzzPage(page);

        await buzzPage.navigate();
        await buzzPage.clickOnbuzz();
         expect (page.url()).toContain('/buzz/viewBuzz');
        await expect(page).toHaveURL(/\/buzz\/viewBuzz/);

})