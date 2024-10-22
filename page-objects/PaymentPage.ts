import { Page } from "@playwright/test";

export class PaymentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPaymentPage() {
    await this.page.getByText("Numéro de carte").click();
    await this.page.getByText("Date d'expiration").click();
    await this.page.getByText("Cryptogramme", { exact: true }).click();
    await this.page.getByText("Carte bancaire").click();
    await this.page
      .getByTestId("paymentStep_radio_paymentOptions_GGP")
      .getByText("Google Pay")
      .click();
    await this.page
      .getByTestId("paymentStep_radio_paymentOptions_PAL")
      .getByText("Paypal")
      .click();
    await this.page
      .getByTestId("paymentStep_radio_paymentOptions_ILI")
      .getByText("Illicado")
      .click();
    await this.page
      .getByTestId("paymentStep_radio_paymentOptions_KDO")
      .getByText("Carte cadeau Kiabi")
      .click();
    await this.page
      .getByTestId("paymentStep_radio_paymentOptions_BAR")
      .getByText("Bon d'achat")
      .click();
    await this.page
      .getByTestId("paymentStep_radio_paymentOptions_PNF")
      .getByText("Oney")
      .click();
  }
}
