import { BUY_BOOK, BUY_CAR} from './shoppingCartTypes'
import { REMOVE_BOOK, REMOVE_CAR } from './shoppingCartTypes'
import { DELETE_BOOK, DELETE_CAR  } from './shoppingCartTypes'

//Action Creator
//Add item to cart
export const buyItem = (item, Quantity = 1) => {

    let object = {
        payload: Quantity
    };

    if (item === 'Book')
        object.type = BUY_BOOK

    else if (item === 'Car')
        object.type = BUY_CAR

    else object.type = null

    return object;
}

//Remove Items from cart
export const removeItem = (item, Quantity = 1) => {
    let object = {
        payload: Quantity
    };

    if (item === 'Book')
        object.type = REMOVE_BOOK

    else if (item === 'Car')
        object.type = REMOVE_CAR

    else object.type = null

    return object;

}

//Remove Items from cart
export const deleteItem = (item) => {
    let object = {
    };

    if (item === 'Book')
        object.type = DELETE_BOOK

    else if (item === 'Car')
        object.type = DELETE_CAR

    else object.type = null

    return object;

}