import { by, element, ElementFinder } from 'protractor';

import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  private firstName: ElementFinder = element(by.id('first-name'));
  private lastName: ElementFinder = element(by.id('last-name'));
  private zip: ElementFinder = element(by.id('postal-code'));
  private continueBtn: ElementFinder = element(by.id('continue'));
  public finishBtn: ElementFinder = element(by.id('finish'));
  public summary: ElementFinder = element(by.id('checkout_summary_container'));
  public completeHeader: ElementFinder = element(by.className('complete-header'));

  async checkout(firstNameValue: string, lastNameValue: string, zipValue: string): Promise<void> {
    await this.firstName.sendKeys(firstNameValue);
    await this.lastName.sendKeys(lastNameValue);
    await this.zip.sendKeys(zipValue);
    return this.continueBtn.click();
  }
}
