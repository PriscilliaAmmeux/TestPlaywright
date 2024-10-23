import { Page } from "@playwright/test";
import { PageUtils } from "./UtilsPage";

export class ProductPage {
  constructor(private page: Page) {}

  async closePopupIfPresent() {
    const popupCloseButton = this.page.locator(
      'div[aria-label="Close dialog"]'
    );
    if (await popupCloseButton.isVisible()) {
      await popupCloseButton.click();
    }
  }

  async selectSize() {
    await PageUtils.selectProductSize(this.page);
  }

  async addToCart() {
    await PageUtils.addToCart(this.page);
  }
}
