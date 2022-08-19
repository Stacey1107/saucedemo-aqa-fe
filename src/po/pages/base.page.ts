import { browser } from 'protractor';

import { Header } from '../components/header.component';

export class BasePage {
  private path: string;
  public header: Header;

  constructor(path: string = '') {
    this.path = path;
    this.header = new Header();
  }

  public open(timeout: number = 500) {
    return browser.get('https://www.saucedemo.com/' + this.path, timeout);
  }
}
