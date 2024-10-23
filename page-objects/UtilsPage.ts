import { Page } from "@playwright/test";

export class PageUtils {
  static async selectProductSize(page: Page) {
    await page.getByTestId("productSizes_button_selectSize").click();
    await page.getByTestId("productSizes_selectSize_L").click();
  }

  static async addToCart(page: Page) {
    await page.getByTestId("productInformation_button_addToCart").click();
    await page.getByTestId("cartConfirmationDrawer_button_seeCart").click();
  }
}
