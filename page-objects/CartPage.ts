import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async proceedAsGuest(
    postalCode: string,
    subtotal: string,
    deliveryCost: string,
    totalEstimated: string,
    itemName2: string,
    returnShopping: string
  ) {
    await this.page
      .getByTestId("cartConfirmationDrawer_button_seeCart")
      .click();
    //check more quantity
    await this.page.getByTestId("button_moreQuantity").click();

    await this.page.getByRole("link", { name: returnShopping }).click();

    //check that the user can select a product other color
    await this.page.getByRole("button", { name: itemName2 }).click();
    await this.page.getByTestId("productSizes_button_selectSize").click();
    await this.page.getByTestId("productSizes_selectSize_L").click();
    await this.page.getByTestId("productInformation_button_addToCart").click();
    await this.page
      .getByTestId("cartConfirmationDrawer_button_seeCart")
      .click();

    //check that the user can remove a product from the cart
    await this.page.getByTestId("button_lessQuantity").click();
    await this.page.getByTestId("button_lessQuantity").click();

    //check that there is a summary of the order
    await this.page.getByText(subtotal).click();
    await this.page.getByText(deliveryCost).click();
    await this.page.getByText(totalEstimated, { exact: true }).click();

    //check that the user can validate the cart
    await this.page
      .getByTestId("invoiceDetailsCard_button_validateCart")
      .click();

    //check that the user can proceed as a guest
    await this.page
      .getByTestId("accountInfosAuthEmailUnknownDrawer_button_TMI")
      .click();

    await this.page.getByTestId("postalCode_input_postalCode").click();
    await this.page.getByTestId("postalCode_input_postalCode").fill(postalCode);
    await this.page.getByTestId("postalCode_button_validate").click();
  }
}
