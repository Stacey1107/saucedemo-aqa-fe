import { by, element, ElementFinder } from 'protractor';

export class Header {
  public shoppingCart: ElementFinder = element(by.id('shopping_cart_container'));
}
