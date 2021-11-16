import { Selector } from "testcafe";

import HomePage from '../page-objects/pages/NopCommercePages/HomePage';
import ProductPage from '../page-objects/pages/NopCommercePages/ProductPage';
import CartPage from "../page-objects/pages/NopCommercePages/CartPage";

// prettier-ignore
fixture `Add item to cart.`
    .page `https://demo.nopcommerce.com/`

    // Test Hooks
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })
    .beforeEach(async t => {
        // Runs before each test
        await t.setTestSpeed(0.5)
        await t.setPageLoadTimeout(5) // Helps load mutiple test pages as well
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems 
    })
    .afterEach(async t => {
        // Runs after each test
        await t.setTestSpeed(0.05)
        await t.setPageLoadTimeout(5) // Helps load mutiple test pages as well
    })

test('Add Electronics-Other item to shopping cart.', async t =>{
    
    // Actions
    await HomePage.ProductCategoryGrid('Electronics')
    await ProductPage.SelectedItems('Other')
    await ProductPage.SelectedItemType('Tablet')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()

    // Assertions
    await t.expect(CartPage.skuNumber.exists).ok()
    await t.expect(CartPage.itemImage.exists).ok()
    await t.expect(CartPage.productItem.exists).ok()
    await t.expect(CartPage.unitPrice.exists).ok()
    await t.expect(CartPage.quantity.exists).ok()
    await t.expect(CartPage.subtotal.exists).ok()
})

test('Add Electronics-Camera & Photo item to shopping cart.', async t =>{
    
    // Actions
    await HomePage.ProductCategoryGrid('Electronics')
    await ProductPage.SelectedItems('Camera')
    await ProductPage.SelectedItemType('Leica')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()

    // Assertions
    await t.expect(CartPage.skuNumber.exists).ok()
    await t.expect(CartPage.itemImage.exists).ok()
    await t.expect(CartPage.productItem.exists).ok()
    await t.expect(CartPage.unitPrice.exists).ok()
    await t.expect(CartPage.quantity.exists).ok()
    await t.expect(CartPage.subtotal.exists).ok()

})

test('Add Electronics-Cellphone item to shopping cart.', async t =>{
    
    // Actions
    await HomePage.ProductCategoryGrid('Electronics')
    await ProductPage.SelectedItems('Cell')
    await ProductPage.SelectedItemType('Mini')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()

    // Assertions
    await t.expect(CartPage.skuNumber.exists).ok()
    await t.expect(CartPage.itemImage.exists).ok()
    await t.expect(CartPage.productItem.exists).ok()
    await t.expect(CartPage.unitPrice.exists).ok()
    await t.expect(CartPage.quantity.exists).ok()
    await t.expect(CartPage.subtotal.exists).ok()

})

test('Add Apparel-Clothing item to shopping cart.', async t =>{
    
    // Actions
    await HomePage.ProductCategoryGrid('Apparel')
    await ProductPage.SelectedItems('Clothing')
    await ProductPage.SelectedItemType('Jeans')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()

    // Assertions
    await t.expect(CartPage.skuNumber.exists).ok()
    await t.expect(CartPage.itemImage.exists).ok()
    await t.expect(CartPage.productItem.exists).ok()
    await t.expect(CartPage.unitPrice.exists).ok()
    await t.expect(CartPage.quantity.exists).ok()
    await t.expect(CartPage.subtotal.exists).ok()

})

test('Add Apparel-Shoes item to shopping cart.', async t =>{
    
    // Actions
    await HomePage.ProductCategoryGrid('Apparel')
    await ProductPage.SelectedItems('Shoes')
    await ProductPage.SelectedItemType('adidas')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()

    // Assertions
    await t.expect(CartPage.skuNumber.exists).ok()
    await t.expect(CartPage.itemImage.exists).ok()
    await t.expect(CartPage.productItem.exists).ok()
    await t.expect(CartPage.unitPrice.exists).ok()
    await t.expect(CartPage.quantity.exists).ok()
    await t.expect(CartPage.subtotal.exists).ok()

})

test('Add Apparel-Accessories item to shopping cart.', async t =>{
    
    // Actions
    await HomePage.ProductCategoryGrid('Apparel')
    await ProductPage.SelectedItems('Accessories')
    await ProductPage.SelectedItemType('Ray')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()

    // Assertions
    await t.expect(CartPage.skuNumber.exists).ok()
    await t.expect(CartPage.itemImage.exists).ok()
    await t.expect(CartPage.productItem.exists).ok()
    await t.expect(CartPage.unitPrice.exists).ok()
    await t.expect(CartPage.quantity.exists).ok()
    await t.expect(CartPage.subtotal.exists).ok()

})

test('Add Digital Downloads item to shopping cart.', async t =>{
    
    // Actions
    await HomePage.ProductCategoryGrid('Digital')
    await ProductPage.SelectedItems('Wait')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()

    // Assertions
    await t.expect(CartPage.skuNumber.exists).ok()
    await t.expect(CartPage.itemImage.exists).ok()
    await t.expect(CartPage.productItem.exists).ok()
    await t.expect(CartPage.unitPrice.exists).ok()
    await t.expect(CartPage.quantity.exists).ok()
    await t.expect(CartPage.subtotal.exists).ok()

})
