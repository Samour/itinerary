import {ItinerariesListState} from "src/store/models/ItinerariesListState";
import IMutation from "src/store/mutations/IMutation";
import MutationType from "src/store/mutations/MutationType";
import {SetItinerariesListSummariesMutation} from "src/store/mutations/itinerariesList/SetItinerariesListSummariesMutation";

const initialState: ItinerariesListState = {
    itineraries: [],
}

const reducer = (state: ItinerariesListState | undefined, mutation: IMutation): ItinerariesListState => {
    state = state || initialState;

    if (mutation.type === MutationType.SET_ITINERARIES_LIST_SUMMARIES) {
        const {itineraries} = mutation as SetItinerariesListSummariesMutation;
        return {
            ...state,
            itineraries,
        };
    } else {
        return state;
    }
}

export default reducer;
