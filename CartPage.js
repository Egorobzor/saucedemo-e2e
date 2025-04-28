class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.removeButton = page.locator('[data-test^="remove"]').first();
  }

  async removeItem() {
    await this.removeButton.click();
  }

  async getCartItemsCount() {
    return this.cartItem.count();
  }
}

module.exports = { CartPage };