import {combineReducers} from "redux";
import {AppState} from "../models/AppState";
import itinerariesList from './itinerariesList';
import itineraryDetail from './itineraryDetail';

export default combineReducers<AppState>({
    itinerariesList,
    itineraryDetail,
});
