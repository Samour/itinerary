import {combineReducers} from "redux";
import itinerariesList from './itinerariesList';
import createItinerary from './createItinerary';
import {AppState} from "../models/AppState";

export default combineReducers<AppState>({
    itinerariesList,
    createItinerary,
});
