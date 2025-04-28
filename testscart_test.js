const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('Add and remove item from cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCart();
  expect(await inventoryPage.getCartBadgeCount()).toBe('1');

  await page.click('.shopping_cart_link');
  const cartPage = new CartPage(page);
  await cartPage.removeItem();
  expect(await cartPage.getCartItemsCount()).toBe(0);
});