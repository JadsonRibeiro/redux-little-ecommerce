import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

import { ICartState } from './modules/cart/types'
import { IAuthState } from './modules/auth/types'

export interface IState {
    cart: ICartState;
    auth: IAuthState
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)

sagaMiddleware.run(rootSaga)

export default store;