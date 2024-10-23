import { Page } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async selectSize() {

    await this.page.getByTestId("productSizes_button_selectSize").click();
    await this.page.getByTestId("productSizes_selectSize_XL").click();
  }

  async addToCart() {
    await this.page.getByTestId("productInformation_button_addToCart").click();
  }
}
