import {combineReducers  , createStore , compose , applyMiddleware} from 'redux';
import { MainBlocksReducer } from './mainBlocksReduser'
import thunk from 'redux-thunk';

const reducers = combineReducers ({
    MainBlocks : MainBlocksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store
export default store;