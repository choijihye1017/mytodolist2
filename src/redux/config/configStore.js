import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import toDo from "../modules/toDo";

const rootReducer = combineReducers({
  toDo: toDo,
});
const store = createStore(rootReducer);

export default store;
