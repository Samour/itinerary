import {combineReducers} from "redux";
import itinerariesList from './itinerariesList';
import {AppState} from "../models/AppState";

export default combineReducers<AppState>({
    itinerariesList,
});
