import { BUY_BOOK, BUY_CAR } from './shoppingCartTypes'
import { REMOVE_BOOK, REMOVE_CAR } from './shoppingCartTypes'
import { DELETE_BOOK, DELETE_CAR } from './shoppingCartTypes'


const intialCartState = {
    numOfBooks: { id: 1, count: 10 },
    numOfCars: { id: 4, count: 10 },
}

export const shoppingCartReducer = (state = intialCartState, action) => {
    switch (action.type) {
        case BUY_BOOK: return {
            ...state,
            numOfBooks:
            {
                id: state.numOfBooks.id,
                count: state.numOfBooks.count + action.payload
            }
        }

        case BUY_CAR: return {
            ...state,
            numOfCars:
            {
                id: state.numOfCars.id,
                count: state.numOfCars.count + action.payload
            }
        }


        case REMOVE_BOOK: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                numOfBooks:
                {
                    id: state.numOfBooks.id,
                    count: state.numOfBooks.count - action.payload
                }
            }
        }

        case REMOVE_CAR: {
            if (action.payload > state.numOfCars)
                return state
            return {
                ...state,
                numOfCars:
                {
                    id: state.numOfCars.id,
                    count: state.numOfCars.count - action.payload
                }
            }
        }

        case DELETE_BOOK: {
            return {
                ...state,
                numOfBooks:
                {
                    id: state.numOfBooks.id,
                    count: 0
                }
            }
        }


        case DELETE_CAR: {
            return {
                ...state,
                numOfCars:
                {
                    id: state.numOfCars.id,
                    count: 0
                }
            }
        }

        default:
            return state
    }
}