import { Page } from "@playwright/test";

export class DeliveryPage {
  constructor(private page: Page) {}

  async proceedAsGuest(postalCode: string) {
    //check that the user can proceed as a guest
    await this.page
      .getByTestId("accountInfosAuthEmailUnknownDrawer_button_TMI")
      .click();

    await this.page.getByTestId("postalCode_input_postalCode").click();
    await this.page.getByTestId("postalCode_input_postalCode").fill(postalCode);
    await this.page.getByTestId("postalCode_button_validate").click();
    }
    
  async selectHomeDelivery() {
    await this.page
      .getByTestId("deliveryChoices_radio_shippingHome")
      .locator("div")
      .click();
  }
}
