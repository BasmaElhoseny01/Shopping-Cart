//Action Creator
import { BUY_AIRPODS, BUY_APPLE, BUY_BAG, BUY_BANANA, BUY_BOOK, BUY_CAMERA, BUY_HAT, BUY_LAPTOP, BUY_LAPTOPBAG, BUY_MANGO, BUY_MOBILE, BUY_MOBILECASE, BUY_NOTEBOOK, BUY_ORANGE, BUY_PENCILS, BUY_RULER, BUY_SCARF, BUY_SHAMPOO, BUY_SHOES, BUY_SUNGLASSES, BUY_WALLET, BUY_WATCH } from '../shoppingCartTypes';

//Add item to cart
export const buyItem = (item, Quantity = 1) => {

    let object = {
        payload: Quantity
    };

    if (item === 1)
        object.type = BUY_SUNGLASSES

    else if (item === 2)
        object.type = BUY_WALLET

    else if (item === 3)
        object.type = BUY_WATCH

    else if (item === 4)
        object.type = BUY_BAG

    else if (item === 5)
        object.type = BUY_HAT

    else if (item === 6)
        object.type = BUY_SCARF

    else if (item === 7)
        object.type = BUY_SHOES

    else if (item === 8)
        object.type = BUY_SHAMPOO

    else if (item === 9)
        object.type = BUY_BOOK

    else if (item === 10)
        object.type = BUY_NOTEBOOK

    else if (item === 11)
        object.type = BUY_PENCILS

    else if (item === 12)
        object.type = BUY_RULER

    else if (item === 13)
        object.type = BUY_APPLE

    else if (item === 14)
        object.type = BUY_BANANA

    else if (item === 15)
        object.type = BUY_MANGO

    else if (item === 16)
        object.type = BUY_ORANGE

    else if (item === 17)
        object.type = BUY_LAPTOP

    else if (item === 18)
        object.type = BUY_LAPTOPBAG

    else if (item === 19)
        object.type = BUY_MOBILE

    else if (item === 20)
        object.type = BUY_MOBILECASE

    else if (item === 21)
        object.type = BUY_AIRPODS

    else if (item === 22)
        object.type = BUY_CAMERA

    else object.type = null

    return object;
}
