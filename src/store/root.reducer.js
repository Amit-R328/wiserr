import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { gigsReducer } from './reducers/gig.reducer.js'
import { userReducer } from './reducers/user.reducer.js'
import { orderReducer } from './reducers/order.reducer.js'
import { reviewReducer } from './reducers/review.reducer'

const rootReducer = combineReducers({
    userModule: userReducer,
    reviewModule: reviewReducer,
    gigModule: gigsReducer,
    orderModule: orderReducer,
})


// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



