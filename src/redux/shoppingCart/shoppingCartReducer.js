import { BUY_AIRPODS, BUY_APPLE, BUY_BAG, BUY_BANANA, BUY_BOOK, BUY_CAMERA, BUY_HAT, BUY_LAPTOP, BUY_LAPTOPBAG, BUY_MANGO, BUY_MOBILE, BUY_MOBILECASE, BUY_NOTEBOOK, BUY_ORANGE, BUY_PENCILS, BUY_RULER, BUY_SCARF, BUY_SHAMPOO, BUY_SHOES, BUY_SUNGLASSES, BUY_WALLET, BUY_WATCH } from './shoppingCartTypes';
import { DELETE_AIRPODS, DELETE_APPLE, DELETE_BAG, DELETE_BANANA, DELETE_BOOK, DELETE_CAMERA, DELETE_HAT, DELETE_LAPTOP, DELETE_LAPTOPBAG, DELETE_MANGO, DELETE_MOBILE, DELETE_MOBILECASE, DELETE_NOTEBOOK, DELETE_ORANGE, DELETE_PENCILS, DELETE_RULER, DELETE_SCARF, DELETE_SHAMPOO, DELETE_SHOES, DELETE_SUNGLASSES, DELETE_WALLET, DELETE_WATCH } from './shoppingCartTypes';
import { REMOVE_AIRPODS, REMOVE_APPLE, REMOVE_BAG, REMOVE_BANANA, REMOVE_BOOK, REMOVE_CAMERA, REMOVE_HAT, REMOVE_LAPTOP, REMOVE_LAPTOPBAG, REMOVE_MANGO, REMOVE_MOBILE, REMOVE_MOBILECASE, REMOVE_NOTEBOOK, REMOVE_ORANGE, REMOVE_PENCILS, REMOVE_RULER, REMOVE_SCARF, REMOVE_SHAMPOO, REMOVE_SHOES, REMOVE_SUNGLASSES, REMOVE_WALLET, REMOVE_WATCH } from './shoppingCartTypes';

const intialCartState = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0
}

export const shoppingCartReducer = (state = intialCartState, action) => {
    switch (action.type) {
        //Sunglasses
        case BUY_SUNGLASSES: return {
            ...state,
            1: state[1] + action.payload
        }

        case REMOVE_SUNGLASSES: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                1: state[1] - action.payload
            }
        }

        case DELETE_SUNGLASSES: return {
            ...state,
            1: 0
        }

        //Wallet
        case BUY_WALLET: return {
            ...state,
            2: state[2] + action.payload
        }

        case REMOVE_WALLET: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                2: state[2] - action.payload
            }
        }

        case DELETE_WALLET: return {
            ...state,
            2: 0
        }

        //WATCH
        case BUY_WATCH: return {
            ...state,
            3: state[3] + action.payload
        }

        case REMOVE_WATCH: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                3: state[3] - action.payload
            }
        }

        case DELETE_WATCH: return {
            ...state,
            3: 0
        }

        //BAG
        case BUY_BAG: return {
            ...state,
            4: state[4] + action.payload
        }

        case REMOVE_BAG: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                4: state[4] - action.payload
            }
        }

        case DELETE_BAG: return {
            ...state,
            4: 0
        }


        //HAT
        case BUY_HAT: return {
            ...state,
            5: state[5] + action.payload
        }

        case REMOVE_HAT: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                5: state[5] - action.payload
            }
        }

        case DELETE_HAT: return {
            ...state,
            5: 0
        }

        //SCARF
        case BUY_SCARF: return {
            ...state,
            6: state[6] + action.payload
        }

        case REMOVE_SCARF: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                6: state[6] - action.payload
            }
        }

        case DELETE_SCARF: return {
            ...state,
            6: 0
        }

        //SHOES
        case BUY_SHOES: return {
            ...state,
            7: state[7] + action.payload
        }

        case REMOVE_SHOES: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                7: state[7] - action.payload
            }
        }

        case DELETE_SHOES: return {
            ...state,
            7: 0
        }

        //SHAMPOO
        case BUY_SHAMPOO: return {
            ...state,
            8: state[8] + action.payload
        }

        case REMOVE_SHAMPOO: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                8: state[8] - action.payload
            }
        }

        case DELETE_SHAMPOO: return {
            ...state,
            8: 0
        }
        //BOOK
        case BUY_BOOK: return {
            ...state,
            9: state[9] + action.payload
        }

        case REMOVE_BOOK: {
            if (action.payload > state.numOfBooks)
                return state
            return {
                ...state,
                9: state[9] - action.payload
            }
        }

        case DELETE_BOOK: return {
            ...state,
            9: 0
        }

        //NOTEBOOK
        case BUY_NOTEBOOK: return {
            ...state,
            10: state[10] + action.payload
        }

        case REMOVE_NOTEBOOK: {
            if (action.payload > state.numOfNOTEBOOKs)
                return state
            return {
                ...state,
                10: state[10] - action.payload
            }
        }

        case DELETE_NOTEBOOK: return {
            ...state,
            10: 0
        }

        //PENCILS
        case BUY_PENCILS: return {
            ...state,
            11: state[11] + action.payload
        }

        case REMOVE_PENCILS: {
            if (action.payload > state.numOfPENCILSs)
                return state
            return {
                ...state,
                11: state[11] - action.payload
            }
        }

        case DELETE_PENCILS: return {
            ...state,
            11: 0
        }

        //RULER
        case BUY_RULER: return {
            ...state,
            12: state[12] + action.payload
        }

        case REMOVE_RULER: {
            if (action.payload > state.numOfRULERs)
                return state
            return {
                ...state,
                12: state[12] - action.payload
            }
        }

        case DELETE_RULER: return {
            ...state,
            12: 0
        }

        //APPLE
        case BUY_APPLE: return {
            ...state,
            13: state[13] + action.payload
        }

        case REMOVE_APPLE: {
            if (action.payload > state.numOfAPPLEs)
                return state
            return {
                ...state,
                13: state[13] - action.payload
            }
        }

        case DELETE_APPLE: return {
            ...state,
            13: 0
        }

        //BANANA
        case BUY_BANANA: return {
            ...state,
            14: state[14] + action.payload
        }

        case REMOVE_BANANA: {
            if (action.payload > state.numOfBANANAs)
                return state
            return {
                ...state,
                14: state[14] - action.payload
            }
        }

        case DELETE_BANANA: return {
            ...state,
            14: 0
        }

        //MANGO
        case BUY_MANGO: return {
            ...state,
            15: state[15] + action.payload
        }

        case REMOVE_MANGO: {
            if (action.payload > state.numOfMANGOs)
                return state
            return {
                ...state,
                15: state[15] - action.payload
            }
        }

        case DELETE_MANGO: return {
            ...state,
            15: 0
        }

        //ORANGE
        case BUY_ORANGE: return {
            ...state,
            16: state[16] + action.payload
        }

        case REMOVE_ORANGE: {
            if (action.payload > state.numOfORANGEs)
                return state
            return {
                ...state,
                16: state[16] - action.payload
            }
        }

        case DELETE_ORANGE: return {
            ...state,
            16: 0
        }

        //LAPTOP
        case BUY_LAPTOP: return {
            ...state,
            17: state[17] + action.payload
        }

        case REMOVE_LAPTOP: {
            if (action.payload > state.numOfLAPTOPs)
                return state
            return {
                ...state,
                17: state[17] - action.payload
            }
        }

        case DELETE_LAPTOP: return {
            ...state,
            17: 0
        }

        //LAPTOPBAG
        case BUY_LAPTOPBAG: return {
            ...state,
            18: state[18] + action.payload
        }

        case REMOVE_LAPTOPBAG: {
            if (action.payload > state.numOfLAPTOPBAGs)
                return state
            return {
                ...state,
                18: state[18] - action.payload
            }
        }

        case DELETE_LAPTOPBAG: return {
            ...state,
            18: 0
        }

        //MOBILE
        case BUY_MOBILE: return {
            ...state,
            19: state[19] + action.payload
        }

        case REMOVE_MOBILE: {
            if (action.payload > state.numOfMOBILEs)
                return state
            return {
                ...state,
                19: state[19] - action.payload
            }
        }

        case DELETE_MOBILE: return {
            ...state,
            19: 0
        }

        //MOBILECASE
        case BUY_MOBILECASE: return {
            ...state,
            20: state[20] + action.payload
        }

        case REMOVE_MOBILECASE: {
            if (action.payload > state.numOfMOBILECASEs)
                return state
            return {
                ...state,
                20: state[20] - action.payload
            }
        }

        case DELETE_MOBILECASE: return {
            ...state,
            20: 0
        }


        //AIRPODS
        case BUY_AIRPODS: return {
            ...state,
            21: state[21] + action.payload
        }

        case REMOVE_AIRPODS: {
            if (action.payload > state.numOfAIRPODSs)
                return state
            return {
                ...state,
                21: state[21] - action.payload
            }
        }

        case DELETE_AIRPODS: return {
            ...state,
            21: 0
        }

        //CAMERA
        case BUY_CAMERA: return {
            ...state,
            22: state[22] + action.payload
        }

        case REMOVE_CAMERA: {
            if (action.payload > state.numOfCAMERAs)
                return state
            return {
                ...state,
                22: state[22] - action.payload
            }
        }

        case DELETE_CAMERA: return {
            ...state,
            22: 0
        }

        default:
            return state
    }
}