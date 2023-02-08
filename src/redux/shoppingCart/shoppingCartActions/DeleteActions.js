//Action Creator
import { DELETE_AIRPODS, DELETE_APPLE, DELETE_BAG, DELETE_BANANA, DELETE_BOOK, DELETE_CAMERA, DELETE_HAT, DELETE_LAPTOP, DELETE_LAPTOPBAG, DELETE_MANGO, DELETE_MOBILE, DELETE_MOBILECASE, DELETE_NOTEBOOK, DELETE_ORANGE, DELETE_PENCILS, DELETE_RULER, DELETE_SCARF, DELETE_SHAMPOO, DELETE_SHOES, DELETE_SUNGLASSES, DELETE_WALLET, DELETE_WATCH } from '../shoppingCartTypes';

//delete Items from cart
export const deleteItem = (item) => {
    let object = {
    };

    if (item === 1)
        object.type = DELETE_SUNGLASSES

    else if (item === 2)
        object.type = DELETE_WALLET

    else if (item === 3)
        object.type = DELETE_WATCH

    else if (item === 4)
        object.type = DELETE_BAG

    else if (item === 5)
        object.type = DELETE_HAT

    else if (item === 6)
        object.type = DELETE_SCARF

    else if (item === 7)
        object.type = DELETE_SHOES

    else if (item === 8)
        object.type = DELETE_SHAMPOO

    else if (item === 9)
        object.type = DELETE_BOOK

    else if (item === 10)
        object.type = DELETE_NOTEBOOK

    else if (item === 11)
        object.type = DELETE_PENCILS

    else if (item === 12)
        object.type = DELETE_RULER

    else if (item === 13)
        object.type = DELETE_APPLE

    else if (item === 14)
        object.type = DELETE_BANANA

    else if (item === 15)
        object.type = DELETE_MANGO

    else if (item === 16)
        object.type = DELETE_ORANGE

    else if (item === 17)
        object.type = DELETE_LAPTOP

    else if (item === 18)
        object.type = DELETE_LAPTOPBAG

    else if (item === 19)
        object.type = DELETE_MOBILE

    else if (item === 20)
        object.type = DELETE_MOBILECASE

    else if (item === 21)
        object.type = DELETE_AIRPODS

    else if (item === 22)
        object.type = DELETE_CAMERA

    else object.type = null

    return object;
}