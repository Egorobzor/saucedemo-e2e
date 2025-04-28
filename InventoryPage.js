class InventoryPage {
  constructor(page) {
    this.page = page;
    this.item = page.locator('.inventory_item').first();
    this.addToCartButton = page.locator('[data-test^="add-to-cart"]').first();
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async getCartBadgeCount() {
    return this.cartBadge.textContent();
  }
}

module.exports = { InventoryPage };