import { Selector } from "testcafe";

import HomePage from '../page-objects/pages/NopCommercePages/HomePage';
import ElectronicsPage from '../page-objects/pages/NopCommercePages/ElectronicsPage';

// prettier-ignore
fixture `Add an item using the Page Body Grid Catergories.`
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
    
    await HomePage.ElectronicsCategoryGrid('Electronics')
    await ElectronicsPage.SelectedElectronicItems('Other')
    await ElectronicsPage.SelectedElectronicType('Tablet')
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.ViewCart()

})

test('Add Electronics-Camera & Photo item to shopping cart.', async t =>{
    
    await HomePage.ElectronicsCategoryGrid('Electronics')
    await ElectronicsPage.SelectedElectronicItems('Camera')
    await ElectronicsPage.SelectedElectronicType('Leica')
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.ViewCart()

})

test('Add Electronics-Cellphone item to shopping cart.', async t =>{
    
    await HomePage.ElectronicsCategoryGrid('Electronics')
    await ElectronicsPage.SelectedElectronicItems('Cell')
    await ElectronicsPage.SelectedElectronicType('Mini')
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.ViewCart()

})

test('Add Apparel-Clothing item to shopping cart.', async t =>{
    
    await HomePage.ElectronicsCategoryGrid('Apparel')
    await ElectronicsPage.SelectedElectronicItems('Clothing')
    await ElectronicsPage.SelectedElectronicType('Jeans')
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.ViewCart()

})

test('Add Apparel-Shoes item to shopping cart.', async t =>{
    
    await HomePage.ElectronicsCategoryGrid('Apparel')
    await ElectronicsPage.SelectedElectronicItems('Shoes')
    await ElectronicsPage.SelectedElectronicType('adidas')
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.ViewCart()

})

test('Add Apparel-Accessories item to shopping cart.', async t =>{
    
    await HomePage.ElectronicsCategoryGrid('Apparel')
    await ElectronicsPage.SelectedElectronicItems('Accessories')
    await ElectronicsPage.SelectedElectronicType('Ray')
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.ViewCart()

})

test('Add Digital Downloads item to shopping cart.', async t =>{
    
    await HomePage.ElectronicsCategoryGrid('Digital')
    await ElectronicsPage.SelectedElectronicType('Wait')
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.AddToCartButton()
    await t.setPageLoadTimeout(5)
    await ElectronicsPage.ViewCart()

})
