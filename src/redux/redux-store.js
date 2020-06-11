import {combineReducers  , createStore , compose , applyMiddleware} from 'redux';
import { MainBlocksReducer } from './mainBlocksReduser'
import thunk from 'redux-thunk';
import SemiSectionsReducer from './semiSectionsreducer';

const reducers = combineReducers ({
    MainBlocks : MainBlocksReducer,
    SemiSections : SemiSectionsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store
export default store;