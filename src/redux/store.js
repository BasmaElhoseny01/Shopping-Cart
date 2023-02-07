import { createStore } from 'redux'

//Logger MiddleWare
//npm install redux-logger
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'

//redux-devtool
import { composeWithDevTools } from '@redux-devtools/extension';

//Reducer
import rootReducer from './rootReducer';

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store