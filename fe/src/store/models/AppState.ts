import {ItinerariesListState} from "./ItinerariesListState";
import {CreateItineraryState} from "./CreateItineraryState";

export interface AppState {
    itinerariesList: ItinerariesListState;
    createItinerary: CreateItineraryState;
}
