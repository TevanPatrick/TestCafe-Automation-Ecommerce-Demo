import { Selector, t } from "testcafe";

class ElectronicsPage 
{

    constructor()
    {
        this.electronicsItem = Selector('.title')
        this.selectedElectronic = Selector('.product-item')
        this.AddToCart = Selector('.add-to-cart-panel')
        this.cartLink = Selector('#topcartlink')
        
    }

    async SelectedElectronicItems(SelectedItem)
    {
        await t.click(this.electronicsItem.withText(SelectedItem))
    }

    async SelectedElectronicType(ItemModel)
    {
        await t.click(this.selectedElectronic.withText(ItemModel))
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

export default new ElectronicsPage()