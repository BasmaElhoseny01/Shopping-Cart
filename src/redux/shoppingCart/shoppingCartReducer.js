import { BUY_BOOK, BUY_CAR } from './shoppingCartTypes'
import { REMOVE_BOOK, REMOVE_CAR } from './shoppingCartTypes'


const intialCartState = {
    numOfBooks: 0,
    numOfCars: 0
}

export const shoppingCartReducer = (state = intialCartState, action) => {
    switch (action.type) {
        case BUY_BOOK: return {
            ...state,
            numOfBooks: state.numOfBooks + action.payload
        }

        case BUY_CAR: return {
            ...state,
            numOfCars: state.numOfCars + action.payload
        }


        case REMOVE_BOOK: {
            if (action.payload < state.numOfBooks)
                throw new Error("Negative number results from this operation")
            return {
                ...state,
                numOfBooks: state.numOfCars - action.payload
            }
        }

        case REMOVE_CAR: {
            if (action.payload < state.numOfCars)
                throw new Error("Negative number results from this operation")
            return {
                ...state,
                numOfCars: state.numOfCars - action.payload
            }
        }

        default:
            return state
    }
}