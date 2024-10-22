import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //home page
  await page.goto("https://www.kiabi.com/");
  await page.getByRole("button", { name: "Accepter", exact: true }).click();
  await page.getByPlaceholder("Recherchez un article").click();
  await page.getByPlaceholder("Recherchez un article").fill("robe");
  await page.getByPlaceholder("Recherchez un article").press("Enter");
  //search results
  await page.getByRole("link", { name: "1/3 Robe courte en plumetis" }).click();

  //product page
  await page.getByTestId("productSizes_button_selectSize").click();
  await page.getByTestId("productSizes_selectSize_L").click();
  await page.getByTestId("productInformation_button_addToCart").click();

  //cart page
  await page.getByTestId("cartConfirmationDrawer_button_seeCart").click();
  await page.getByTestId("invoiceDetailsCard_button_validateCart").click();
  await page
    .getByTestId("accountInfosAuthEmailUnknownDrawer_button_TMI")
    .click();
  await page.getByTestId("postalCode_input_postalCode").click();
  await page.getByTestId("postalCode_input_postalCode").fill("28820");
  await page.getByTestId("postalCode_button_validate").click();

  //delivery page
  await page
    .getByTestId("deliveryChoices_radio_shippingHome")
    .locator("div")
    .click();
});
