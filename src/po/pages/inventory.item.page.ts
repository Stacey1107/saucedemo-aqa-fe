import { by, element, ElementFinder } from 'protractor';

import { BasePage } from './base.page';

export class InventoryItemPage extends BasePage {
  public description: ElementFinder = element(by.className('inventory_details_desc'));
  public price: ElementFinder = element(by.className('inventory_details_price'));
  public addToCartBtn: ElementFinder = element(by.xpath('//button[text()="Add to cart"]'));
}
