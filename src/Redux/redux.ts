import { createStore, combineReducers } from "redux";
import { HingesReduser } from "./HingesReduser/HingesReduser";

const globalReduser = combineReducers({
	HingesReduser,
});

const store = createStore(globalReduser);
