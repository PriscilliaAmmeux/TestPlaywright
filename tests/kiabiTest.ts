import { test } from "@playwright/test";
import { HomePage } from "../page-objects/HomePage";
import { SearchResultsPage } from "../page-objects/SearchResultsPage";
import { ProductPage } from "../page-objects/ProductPage";
import { CartPage } from "../page-objects/CartPage";
import { DeliveryPage } from "../page-objects/DeliveryPage";
import { PaymentPage } from "../page-objects/PaymentPage";
import * as testData from "../data/testData.json";

async function acceptCookies(page) {
  const homePage = new HomePage(page);
  await homePage.acceptCookies();
}

async function searchForItem(page, keyword) {
  const homePage = new HomePage(page);
  await homePage.searchForItem(keyword);
}

async function selectFirstItem(page) {
  const searchResultsPage = new SearchResultsPage(page);
  await searchResultsPage.selectItem(0);
}

async function addItemToCart(page) {
  const productPage = new ProductPage(page);
  await productPage.addToCart();
}

async function proceedAsGuest(page, postalCode) {
  const cartPage = new CartPage(page);
  await cartPage.proceedAsGuest(postalCode);
}

async function selectHomeDelivery(page) {
  const deliveryPage = new DeliveryPage(page);
  await deliveryPage.selectHomeDelivery();
}

async function verifyPaymentPageElements(page) {
    const paymentPage = new PaymentPage(page);
    
//???
}

async function runTestForEnvironment(page, data) {
  await page.goto("/");
  await acceptCookies(page);
  await searchForItem(page, data.searchKeyword);
  await selectFirstItem(page);
  await addItemToCart(page);
  await proceedAsGuest(page, data.postalCode);
  await selectHomeDelivery(page);
  await verifyPaymentPageElements(page);
}

test.describe("Kiabi Tests", () => {
  test("Test on FR environment", async ({ page }) => {
    await runTestForEnvironment(page, testData.FR);
  });

  test("Test on ES environment", async ({ page }) => {
    await runTestForEnvironment(page, testData.ES);
  });
});
