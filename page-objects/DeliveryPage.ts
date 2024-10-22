import { Page } from "@playwright/test";

export class DeliveryPage {
  constructor(private page: Page) {}

  async selectHomeDelivery() {
    await this.page
      .getByTestId("deliveryChoices_radio_shippingHome")
      .locator("div")
      .click();
  }
}
