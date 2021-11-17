import { Selector, t } from "testcafe";

class HomePage
{
    constructor()
    {
        this.register = Selector('.ico-register')
        this.login = Selector('.ico-login')
        this.wishList = Selector('.ico-wishlist')
        this.shoppingCart = Selector('.ico-cart')
        this.searchText = Selector('#small-search-box-form')
        this.searchSubmit = Selector('.button-1 search-box-button')
        this.logo = Selector('.header-logo')
        this.currency = Selector('#customerCurrency')
        this.menu = Selector('.header-menu')
        this.books = Selector('.top-menu notmobile')
        this.slider = Selector('#nivo-slider')
        this.category = Selector('.category-grid home-page-category-grid')
        this.product = Selector('.product-grid home-page-product-grid')
        this.news = Selector('.news-items')
        this.poll = Selector('#poll-block-1')
        this.footerDetails = Selector('.footer')
        this.productTypeItems = Selector('.title')
        this.menuDigitalDownloads = Selector('.top-menu notmobile')

    }

    async RegisterLink()
    {
        await t.click(this.register)
    }

    async LoginLink()
    {
        await t.click(this.login)
    }

    async WishListLink()
    {
        await t.click(this.wishList)
    }

    async ShoppingCartLink()
    {
        await t.click(this.shoppingCart)
    }

    async SearchBox(searchInput)
    {
        await t.typeText(this.searchText, searchInput)
        return searchInput
    }

    async SearchButton()
    {
        await t.click(this.searchSubmit)
    }

    async HeaderLogo()
    {
        
    }

    async CurrencySelector()
    {
        await t.click(this.currency)
    }

    async TopMenu(CategoryOption)
    {
        await t.click(this.menu.find(CategoryOption))    
    }

    async TopMenuBooks()
    {
        await t.click(this.books)
    }


    async BodySlider()
    {
        
    }

    async CatergoryGrid()
    {
        
    }

    async ProductGrid()
    {
        
    }

    async NewsList()
    {
        
    }

    async CommunityPoll()
    {
        
    }

    async Footer()
    {
        
    }

    async ProductCategoryGrid(ProductType)
    {
        await t.click(this.productTypeItems.withText(ProductType))
    }


}
export default new HomePage()