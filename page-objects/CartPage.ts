import { Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async proceedAsGuest(postalCode: string) {
    await this.page
      .getByTestId("invoiceDetailsCard_button_validateCart")
      .click();
    await this.page
      .getByTestId("accountInfosAuthEmailUnknownDrawer_button_TMI")
      .click();
    await this.page.fill("input#postal-code", postalCode);
    await this.page.click("button#continue");
  }
}
