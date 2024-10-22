import { Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acceptCookies() {
    await this.page.click("button#accept-cookies");
  }

  async searchForItem(keyword: string) {
    await this.page.fill("input#search-input", keyword);
    await this.page.press("input#search-input", "Enter");
  }
}
