import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/HomePage";
import * as testData from "../data/testData.json";

async function runTestForEnvironment(page, data) {
  const homePage = new HomePage(page);

  await page.goto("/");
  await homePage.acceptCookies();
  await homePage.searchForItem(data.searchKeyword);
}

test.describe("Kiabi Tests", () => {
  test("Test on FR environment", async ({ page }) => {
    await runTestForEnvironment(page, testData.FR);
  });

  test("Test on ES environment", async ({ page }) => {
    await runTestForEnvironment(page, testData.ES);
  });
});
