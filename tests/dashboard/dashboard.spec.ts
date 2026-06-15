import {test,expect} from '../../fixtures/baseTest'

test("click on dashboard", async({dashBoard,page})=>{
    await dashBoard.navigate();
    await dashBoard.clickButton();
    await expect(page).toHaveURL(/\/dashboard\/index/);

})