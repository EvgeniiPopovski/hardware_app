import {combineReducers  , createStore , compose , applyMiddleware} from 'redux';
import { MainBlocksReducer } from './mainBlocksReduser'
import thunk from 'redux-thunk';
import SemiSectionsReducer from './semiSectionsreducer';
import { HingesListReduser } from './hingesListReduser';
import { cartReduser } from './cartReducer';
import { likedItemsReducer } from './likedItemsReducer';
import { AuthReduser } from './authReducer';

const reducers = combineReducers ({
    MainBlocks : MainBlocksReducer,
    SemiSections : SemiSectionsReducer,
    HingesList : HingesListReduser,
    Cart : cartReduser,
    LikedItems : likedItemsReducer,
    AuthReduser : AuthReduser,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store
export default store;