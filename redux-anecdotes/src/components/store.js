import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import NotificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: NotificationReducer,
    filter: filterReducer
})

const Store = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}

export default Store