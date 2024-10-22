import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async proceedAsGuest(postalCode: number) {
    await this.page
      .getByTestId("cartConfirmationDrawer_button_seeCart")
      .click();
    await this.page
      .getByTestId("invoiceDetailsCard_button_validateCart")
      .click();
    await this.page
      .getByTestId("accountInfosAuthEmailUnknownDrawer_button_TMI")
      .click();
    await this.page.getByTestId("postalCode_input_postalCode").click();
    await this.page.getByTestId("postalCode_input_postalCode").fill("28820");
    await this.page.getByTestId("postalCode_button_validate").click();
  }
}
