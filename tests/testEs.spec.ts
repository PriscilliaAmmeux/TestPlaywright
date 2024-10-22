import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.kiabi.es/");
  await page.getByRole("button", { name: "Aceptar" }).click();
  await page.waitForSelector('input[placeholder="Buscar una referencia "]');
  await page.getByPlaceholder("Buscar una referencia ").click();
  await page.getByPlaceholder("Buscar una referencia ").fill("vestido");
  await page.getByPlaceholder("Buscar una referencia ").press("Enter");
  await page.getByRole("link", { name: "1/3 Vestido cruzado con" }).click();
  await page.getByTestId("productSizes_button_selectSize").click();
  await page.getByTestId("productSizes_selectSize_L").click();
  await page.getByTestId("productInformation_button_addToCart").click();
  await page.getByTestId("cartConfirmationDrawer_button_seeCart").click();
  await page.getByTestId("invoiceDetailsCard_button_validateCart").click();
  await page
    .getByTestId("accountInfosAuthEmailUnknownDrawer_button_TMI")
    .click();
  await page.getByTestId("postalCode_input_postalCode").click();
  await page.getByTestId("postalCode_input_postalCode").fill("28820");
  await page.getByTestId("postalCode_button_validate").click();
  await page
    .getByTestId("deliveryChoices_radio_shippingHome")
    .locator("div")
    .click();
});
