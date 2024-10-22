import { Page } from "@playwright/test";

export class DeliveryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectHomeDelivery() {
    await this.page.click("input#home-delivery");
    await this.page.click("button#continue");
  }
}
