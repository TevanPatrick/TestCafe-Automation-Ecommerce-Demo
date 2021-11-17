import { Selector } from "testcafe";

import HomePage from '../page-objects/pages/NopCommercePages/HomePage';
import ProductPage from '../page-objects/pages/NopCommercePages/ProductPage';
import CartPage from "../page-objects/pages/NopCommercePages/CartPage";

// prettier-ignore
fixture `Checkout the cart page.`
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

test('Checkout the cart page.', async t =>{
    
    await HomePage.ProductCategoryGrid('Electronics')
    await ProductPage.SelectedItems('Other')
    await ProductPage.SelectedItemType('Tablet')
    await t.setPageLoadTimeout(5)
    await ProductPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ProductPage.ViewCart()
    await CartPage.CheckedTerms()
    await CartPage.ClickCheckOutButton()


})
