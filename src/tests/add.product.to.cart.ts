import { browser } from 'protractor';

import { COMPLETE_ORDER_MESSAGE } from '../data/constants';
import { PRODUCTS_DETAILS_SAMPLE } from '../fixtures/products.description';
import { LoginPage, InventoryListPage, InventoryItemPage, CartPage, CheckoutPage } from '../po/pages';

const loginPage = new LoginPage();
const inventoryListPage = new InventoryListPage();
const inventoryItemPage = new InventoryItemPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('Check Product Purchase Flow', function () {
  it('Add Sauce Labs Backpack product to cart and order it', async function () {
    await browser.waitForAngularEnabled(false);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(await inventoryListPage.list.isDisplayed()).toBe(true);

    await inventoryListPage.item(PRODUCTS_DETAILS_SAMPLE.Backpack.name).click();
    await expect(await inventoryItemPage.description.getText()).toEqual(PRODUCTS_DETAILS_SAMPLE.Backpack.description);
    await expect(await inventoryItemPage.price.getText()).toEqual(PRODUCTS_DETAILS_SAMPLE.Backpack.price);
    await inventoryItemPage.addToCartBtn.click();
    await inventoryItemPage.header.shoppingCart.click();

    await expect(await cartPage.productName.getText()).toEqual(PRODUCTS_DETAILS_SAMPLE.Backpack.name);
    await expect(await cartPage.productPrice.getText()).toEqual(PRODUCTS_DETAILS_SAMPLE.Backpack.price);
    await expect(await cartPage.productDescription.getText()).toEqual(PRODUCTS_DETAILS_SAMPLE.Backpack.description);
    await expect(await cartPage.productQuantity.getText()).toEqual('1');

    await cartPage.checkoutBtn.click();

    await checkoutPage.checkout('Anastasiya', 'Barysava', '220094');
    await expect(await checkoutPage.summary.isDisplayed()).toEqual(true);
    await checkoutPage.finishBtn.click();
    await expect(await checkoutPage.completeHeader.isDisplayed()).toEqual(true);
    await expect(await checkoutPage.completeHeader.getText()).toBe(COMPLETE_ORDER_MESSAGE);
  });
});
