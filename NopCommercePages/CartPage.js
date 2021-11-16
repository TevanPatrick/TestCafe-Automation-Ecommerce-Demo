import { Selector, t} from "testcafe";

class Cart 
{
    constructor()
    {
        this.removedItem = Selector('.remove-btn')
    }

    async RemoveCartItem()
    {
        await t.click(this.removedItem)
    }

}
export default new Cart()
