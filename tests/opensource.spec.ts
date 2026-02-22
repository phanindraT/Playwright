import { test, expect } from '@playwright/test';
test.only("opensource", async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const username = page.getByPlaceholder("Username");
    await username.fill('Admin');
    await page.getByPlaceholder("password").fill('admin123');
    await page.getByRole("button",{name: "Login" }).click();
    await expect(page).toHaveURL(/dashboard/);   
    await page.getByText('Recruitment', { exact: true }).click();
    await expect(page).toHaveURL(/viewCandidates/);
});