import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {getProductReducer} from './reducers/productReducer'


const reducers = combineReducers({
    allGetProducts: getProductReducer
});

const middleware = [thunk];


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;