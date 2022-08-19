import { by, element, ElementFinder } from 'protractor';

import { BasePage } from './base.page';

export class CartPage extends BasePage {
  public productName: ElementFinder = element(by.className('inventory_item_name'));
  public productDescription: ElementFinder = element(by.className('inventory_item_desc'));
  public productPrice: ElementFinder = element(by.className('inventory_item_price'));
  public productQuantity: ElementFinder = element(by.className('cart_quantity'));
  public checkoutBtn: ElementFinder = element(by.id('checkout'));
}
