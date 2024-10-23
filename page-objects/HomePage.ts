import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async acceptCookies(acceptCookiesButton: string) {
    await this.page
      .getByRole("button", { name: acceptCookiesButton, exact: true })
      .click();
  }

  async searchForItem(
    searchKeyword: string,
    searchPlaceholder: string,
    itemName1: string
  ) {
    await this.page.getByPlaceholder(searchPlaceholder).click();
    await this.page.getByPlaceholder(searchPlaceholder).fill(searchKeyword);
      await this.page.getByPlaceholder(searchPlaceholder).press("Enter");
      
      //check that the user can select the first item
    await this.page.getByRole("link", { name: itemName1 }).click();
  }
}
