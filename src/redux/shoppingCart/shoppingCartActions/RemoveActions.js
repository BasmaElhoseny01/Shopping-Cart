//Action Creator
import { REMOVE_AIRPODS, REMOVE_APPLE, REMOVE_BAG, REMOVE_BANANA, REMOVE_BOOK, REMOVE_CAMERA, REMOVE_HAT, REMOVE_LAPTOP, REMOVE_LAPTOPBAG, REMOVE_MANGO, REMOVE_MOBILE, REMOVE_MOBILECASE, REMOVE_NOTEBOOK, REMOVE_ORANGE, REMOVE_PENCILS, REMOVE_RULER, REMOVE_SCARF, REMOVE_SHAMPOO, REMOVE_SHOES, REMOVE_SUNGLASSES, REMOVE_WALLET, REMOVE_WATCH } from '../shoppingCartTypes';

//Remove item from cart
export const removeItem = (item, Quantity = 1) => {
    let object = {
        payload: Quantity
    };

    if (item === 1)
        object.type = REMOVE_SUNGLASSES

    else if (item === 2)
        object.type = REMOVE_WALLET

    else if (item === 3)
        object.type = REMOVE_WATCH

    else if (item === 4)
        object.type = REMOVE_BAG

    else if (item === 5)
        object.type = REMOVE_HAT

    else if (item === 6)
        object.type = REMOVE_SCARF

    else if (item === 7)
        object.type = REMOVE_SHOES

    else if (item === 8)
        object.type = REMOVE_SHAMPOO

    else if (item === 9)
        object.type = REMOVE_BOOK

    else if (item === 10)
        object.type = REMOVE_NOTEBOOK

    else if (item === 11)
        object.type = REMOVE_PENCILS

    else if (item === 12)
        object.type = REMOVE_RULER

    else if (item === 13)
        object.type = REMOVE_APPLE

    else if (item === 14)
        object.type = REMOVE_BANANA

    else if (item === 15)
        object.type = REMOVE_MANGO

    else if (item === 16)
        object.type = REMOVE_ORANGE

    else if (item === 17)
        object.type = REMOVE_LAPTOP

    else if (item === 18)
        object.type = REMOVE_LAPTOPBAG

    else if (item === 19)
        object.type = REMOVE_MOBILE

    else if (item === 20)
        object.type = REMOVE_MOBILECASE

    else if (item === 21)
        object.type = REMOVE_AIRPODS

    else if (item === 22)
        object.type = REMOVE_CAMERA

    else object.type = null

    return object;
}
