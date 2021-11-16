import { Selector } from "testcafe";

// Import Page Object Model dependancies
import HomePage from '../page-objects/pages/NopCommercePages/HomePage'


// Global variables
const homePageReturn = 'https://demo.nopcommerce.com/'
const computersPage = 'https://demo.nopcommerce.com/computers'
const apparelPage = 'https://demo.nopcommerce.com/apparel'
const electronicsPage = 'https://demo.nopcommerce.com/electronics'
const desktopPage = 'https://demo.nopcommerce.com/desktops'
const notesbooksPage = 'https://demo.nopcommerce.com/notebooks'
const softwarePage = 'https://demo.nopcommerce.com/software'
const cameraPage = 'https://demo.nopcommerce.com/camera-photo'
const cellphonePage = 'https://demo.nopcommerce.com/cell-phones'
const otherPage = 'https://demo.nopcommerce.com/others'
const shoesPage = 'https://demo.nopcommerce.com/shoes'
const clothingPage = 'https://demo.nopcommerce.com/clothing'
const accessoriesPage = 'https://demo.nopcommerce.com/accessories'
const digitalPage = 'https://demo.nopcommerce.com/digital-downloads'
const booksPage = 'https://demo.nopcommerce.com/books'
const jewelryPage = 'https://demo.nopcommerce.com/jewelry'
const giftPage = 'https://demo.nopcommerce.com/gift-cards'
const allManufacturersPage = 'https://demo.nopcommerce.com/manufacturer/all'
const applePage = 'https://demo.nopcommerce.com/apple'
const hpPage = 'https://demo.nopcommerce.com/hp'
const nikePage = 'https://demo.nopcommerce.com/nike'


// prettier-ignore
fixture `Got to and browse home page features.`
    .page `https://demo.nopcommerce.com/`

    // Test Hooks
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })
    .beforeEach(async t => {
        // Runs before each test
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(3) // Helps load mutiple test pages as well
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems 
    })
    .afterEach(async t => {
        // Runs after each test
        //await t.setTestSpeed(1)
        await t.setPageLoadTimeout(3) // Helps load mutiple test pages as well
    })

test('Validate Register Link active', async t => {

    await HomePage.RegisterLink()
    await t.navigateTo(homePageReturn)

})

test('Validate Login Link active', async t => {

    await HomePage.LoginLink()
    await t.navigateTo(homePageReturn)

})

test('Validate Shopping Cart Link active', async t => {

    await HomePage.ShoppingCartLink()
    await t.navigateTo(homePageReturn)

})

test('Validate Wish List Link active', async t => {

    await HomePage.WishListLink()
    await t.navigateTo(homePageReturn)

})

test('Validate Logo element exists', async t => {

    await HomePage.logo.exists

})

test('Validate Menu element exists', async t => {

    await HomePage.menu.exists

})

test('Validate Search box element exists', async t => {

    await HomePage.searchText.exists

})

test('Validate Search button element exists', async t => {

    await HomePage.searchSubmit.exists

})
/*
test('Validate features is active and exists.', async t => {

    await HomePage.SearchBox('Books')
    await HomePage.RegisterLink()
    await t.navigateTo(homePageReturn)
    await HomePage.ShoppingCartLink()
    await t.navigateTo(homePageReturn)
    await HomePage.WishListLink()
    await t.navigateTo(homePageReturn)
    await HomePage.LoginLink()
    await t.navigateTo(homePageReturn)
    await HomePage.CurrencySelector()
    await t.navigateTo(homePageReturn)
    await HomePage.TopMenu()
    await HomePage.slider.exists
    await HomePage.category.exists
    await HomePage.product.exists
    await HomePage.news.exists
    await HomePage.poll.exists
    await HomePage.footerDetails.exists

})
*/