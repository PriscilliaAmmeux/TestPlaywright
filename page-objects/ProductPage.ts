import { Page } from "@playwright/test";
import { PageUtils } from "./UtilsPage";

export class ProductPage {
  constructor(private page: Page) {}

  async selectSize() {
    await PageUtils.selectProductSize(this.page);
  }

  async addToCart() {
    await PageUtils.addToCart(this.page);
  }
}
