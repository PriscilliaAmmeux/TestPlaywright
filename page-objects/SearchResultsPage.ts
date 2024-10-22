import { Page } from "@playwright/test";

export class SearchResultsPage {
  constructor(private page: Page) {}

  async selectItem(itemName: string) {
    await this.page.getByRole("link", { name: itemName }).click();
  }
}
