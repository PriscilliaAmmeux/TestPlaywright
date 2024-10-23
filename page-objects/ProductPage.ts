import { Page } from "@playwright/test";
import { PageUtils } from "./UtilsPage";

export class ProductPage {
  constructor(private page: Page) {}

  async closePopupIfPresent() {
    const popup = this.page.locator("selector-for-popup");

    if (await popup.isVisible()) {
      await this.page.getByRole("button", { name: "Close dialog" }).click();
    }
  }

  async selectSize() {
    await PageUtils.selectProductSize(this.page);
  }

  async addToCart() {
    await PageUtils.addToCart(this.page);
  }
}
