import { Selector, t } from "testcafe";

class ProductPage 
{

    constructor()
    {
        this.Item = Selector('.title')
        this.selectedType = Selector('.product-item')
        this.AddToCart = Selector('.add-to-cart-panel')
        this.cartLink = Selector('#topcartlink')
        
    }

    async SelectedItems(SelectedItem)
    {
        await t.click(this.Item.withText(SelectedItem))
    }

    async SelectedItemType(ItemModel)
    {
        await t.click(this.selectedType.withText(ItemModel))
    }

    async AddToCartButton()
    {
        await t.click(this.AddToCart)
    }

    async ViewCart()
    {
        await t.click(this.cartLink)
    }



}

export default new ProductPage()