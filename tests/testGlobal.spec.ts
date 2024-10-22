import { test } from "@playwright/test";
import { HomePage } from "../page-objects/HomePage";
import { ProductPage } from "../page-objects/ProductPage";
import { CartPage } from "../page-objects/CartPage";
import { DeliveryPage } from "../page-objects/DeliveryPage";
import { PaymentPage } from "../page-objects/PaymentPage";
import * as testData from "../data/testData.json";

async function runTestForEnvironment(page, data) {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const deliveryPage = new DeliveryPage(page);

  await page.goto(data.url);
  await homePage.acceptCookies(data.acceptCookiesButton);
  await homePage.searchForItem(
    data.searchKeyword,
    data.searchPlaceholder,
    data.itemName
  );
  await productPage.selectSize(data.size);
  await productPage.addToCart();
  await cartPage.proceedAsGuest(data.postalCode);
  await deliveryPage.selectHomeDelivery();
}

test.describe("Kiabi Tests", () => {
  test("Test on FR environment", async ({ page }) => {
    await runTestForEnvironment(page, testData.FR);
  });

  test("Test on ES environment", async ({ page }) => {
    await runTestForEnvironment(page, testData.ES);
  });
});
