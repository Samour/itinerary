import {ItineraryDetailState} from "src/store/models/ItineraryDetailState";
import IMutation from "src/store/mutations/IMutation";
import MutationType from "src/store/mutations/MutationType";
import {SetItineraryDetailMutation} from "src/store/mutations/itineraryDetail/SetItineraryDetailMutation";

const initialState: ItineraryDetailState = {
    loading: true,
    itinerary: null,
};

const reducer = (state: ItineraryDetailState | undefined, mutation: IMutation): ItineraryDetailState => {
    state = state ?? initialState;
    if (mutation.type === MutationType.ITINERARY_DETAIL_LOADING) {
        return {
            ...state,
            loading: true,
            itinerary: null,
        };
    } else if (mutation.type === MutationType.SET_ITINERARY_DETAIL) {
        const {itinerary} = mutation as SetItineraryDetailMutation;
        return {
            ...state,
            loading: false,
            itinerary,
        };
    } else {
        return state;
    }
};

export default reducer;
