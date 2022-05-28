// const { createStore, applyMiddleware, combineReducers, compose } = Redux
// const thunk = ReduxThunk.default

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { gigsReducer } from './reducers/gigs.reducer.js'
import { userReducer } from './reducers/user.reducer.js'
import { orderReducer } from './reducers/order.reducer.js'
// import { userReducer } from './user.reducer.js'
import { reviewReducer } from './reducers/review.reducer'

const rootReducer = combineReducers({
    userModule: userReducer,
    reviewModule: reviewReducer,
    gigModule: gigsReducer,
    orderModule: orderReducer,
})


// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, applyMiddleware(thunk))


