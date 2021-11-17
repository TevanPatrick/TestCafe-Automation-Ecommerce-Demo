import { Selector, t} from "testcafe";

class CartPage
{
    constructor()
    {
        this.removedItem = Selector('.remove-btn')
        this.checkOutButton = Selector('#checkout')
        this.termsChecked = Selector('#termsofservice')
        this.skuNumber = Selector('.sku-number')
        this.itemImage = Selector('.product-picture')
        this.productItem = Selector('.product')
        this.unitPrice = Selector('.unit-price')
        this.quantity = Selector('.quantity')
        this.subtotal = Selector('.subtotal')

    }

    async RemoveCartItem()
    {
        await t.click(this.removedItem)
    }

    async ClickCheckOutButton()
    {
        await t.click(this.checkOutButton)
    }

    async CheckedTerms()
    {
        await t.click(this.termsChecked)
    }


}
export default new CartPage()
