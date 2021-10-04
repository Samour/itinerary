import {createStore, Store} from "redux";
import rootReducer from './reducers';
import {AppState} from "./models/AppState";

const store: Store<AppState> = createStore(rootReducer);

export default store;
