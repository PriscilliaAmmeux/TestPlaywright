import { Page } from "@playwright/test";

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectItem(index: number) {
    const items = await this.page.$$("li.product-item");
    if (items.length > index) {
      await items[index].click();
    } else {
      throw new Error(`Item with index ${index} not found`);
    }
  }
}
