import { by, element, ElementFinder } from 'protractor';

import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private username: ElementFinder = element(by.id('user-name'));
  private password: ElementFinder = element(by.id('password'));
  private loginBtn: ElementFinder = element(by.id('login-button'));

  async login(userNameValue: string, passwordValue: string): Promise<void> {
    await this.username.sendKeys(userNameValue);
    await this.password.sendKeys(passwordValue);
    return this.loginBtn.click();
  }
}
