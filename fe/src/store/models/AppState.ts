import {ItinerariesListState} from "./ItinerariesListState";
import {ItineraryDetailState} from "./ItineraryDetailState";

export interface AppState {
    itinerariesList: ItinerariesListState;
    itineraryDetail: ItineraryDetailState;
}
