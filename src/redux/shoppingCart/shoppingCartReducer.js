import { BUY_BOOK, BUY_CAR } from './shoppingCartTypes'
import { REMOVE_BOOK, REMOVE_CAR } from './shoppingCartTypes'
import { DELETE_BOOK, DELETE_CAR } from './shoppingCartTypes'


const intialCartState = {
    numOfBooks: 0,
    numOfCars: 0,
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
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                numOfBooks: state.numOfBooks - action.payload
            }
        }

        case REMOVE_CAR: {
            if (action.payload > state.numOfCars)
                return state
            return {
                ...state,
                numOfCars: state.numOfCars - action.payload
            }
        }

        case DELETE_BOOK: {
            return {
                ...state,
                numOfBooks: 0
            }
        }


        case DELETE_CAR: {
            return {
                ...state,
                numOfCars: 0
            }
        }

        default:
            return state
    }
}