import { by, element, ElementFinder } from 'protractor';

import { BasePage } from './base.page';

export class InventoryListPage extends BasePage {
  public list: ElementFinder = element(by.className('inventory_list'));
  public item = (itemName: string): ElementFinder => element(by.xpath(`//div[text() = "${itemName}"]/..`));
}
