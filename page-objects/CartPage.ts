import { Page } from "@playwright/test";
import { PageUtils } from "./UtilsPage";

export class CartPage {
  constructor(private page: Page) {}

  async modifyCart(itemName2: string, returnShopping: string) {
    //check more quantity
    await this.page.getByTestId("button_moreQuantity").click();

    //check that the user can return to shopping
    await this.page.getByRole("link", { name: returnShopping }).click();

    //check that the user can select the same item but other color
    await this.page.getByRole("button", { name: itemName2 }).click();
    await PageUtils.selectProductSize(this.page);
    await PageUtils.addToCart(this.page);

    //check that the user can remove a product from the cart
    await this.page.getByTestId("button_lessQuantity").click();
    await this.page.getByTestId("button_lessQuantity").click();
  }

  async checkCartSummary(
    subtotal: string,
    deliveryCost: string,
    totalEstimated: string
  ) {
    //check that there is a summary of the order
    await this.page.getByText(subtotal).click();
    await this.page.getByText(deliveryCost).click();
    await this.page.getByText(totalEstimated, { exact: true }).click();

    //check that the user can validate the cart
    await this.page
      .getByTestId("invoiceDetailsCard_button_validateCart")
      .click();
  }
}
