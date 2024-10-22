import { Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.getByTestId("productSizes_button_selectSize").click();
    await this.page.getByTestId("productSizes_selectSize_L").click();
    await this.page.getByTestId("productInformation_button_addToCart").click();
    await this.page
      .getByTestId("cartConfirmationDrawer_button_seeCart")
      .click();
  }
}
