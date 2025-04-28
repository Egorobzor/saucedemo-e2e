const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
});

test('Invalid password login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'invalid_password');
  await expect(loginPage.errorMessage).toBeVisible();
  expect(await loginPage.getErrorMessage()).toContain('Username and password do not match');
});