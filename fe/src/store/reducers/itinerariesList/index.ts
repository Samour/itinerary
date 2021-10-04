import {ItinerariesListState} from "src/store/models/ItinerariesListState";
import IMutation from "src/store/mutations/IMutation";
import MutationType from "src/store/mutations/MutationType";
import {SetItinerariesListSummariesMutation} from "src/store/mutations/itinerariesList/SetItinerariesListSummariesMutation";
import {OpenItineraryDeleteModalMutation} from "src/store/mutations/itinerariesList/OpenItineraryDeleteModalMutation";
import {ItineraryDeleteInProgressMutation} from "src/store/mutations/itinerariesList/ItineraryDeleteInProgressMutation";

const initialState: ItinerariesListState = {
    itineraries: [],
    itineraryToDelete: {
        openConfirmationModal: false,
        itinerary: null,
        deleteInProgress: false,
    },
}

const reducer = (state: ItinerariesListState | undefined, mutation: IMutation): ItinerariesListState => {
    state = state || initialState;

    if (mutation.type === MutationType.SET_ITINERARIES_LIST_SUMMARIES) {
        const {itineraries} = mutation as SetItinerariesListSummariesMutation;
        return {
            ...state,
            itineraries,
            // If the list of itineraries has changed, we don't want to have a reference to an itinerary that may not
            // be present
            itineraryToDelete: {
                openConfirmationModal: false,
                itinerary: null,
                deleteInProgress: false,
            },
        };
    } else if (mutation.type === MutationType.OPEN_ITINERARY_DELETE_MODAL) {
        const {itinerary} = mutation as OpenItineraryDeleteModalMutation;
        return {
            ...state,
            itineraryToDelete: {
                openConfirmationModal: true,
                itinerary,
                deleteInProgress: false,
            },
        };
    } else if (mutation.type === MutationType.ITINERARY_DELETE_IN_PROGRESS) {
        const {deleteInProgress} = mutation as ItineraryDeleteInProgressMutation;
        return {
            ...state,
            itineraryToDelete: {
                ...state.itineraryToDelete,
                deleteInProgress,
            },
        };
    } else if (mutation.type === MutationType.CLOSE_ITINERARY_DELETE_MODAL) {
        return {
            ...state,
            itineraryToDelete: {
                openConfirmationModal: false,
                itinerary: null,
                deleteInProgress: false,
            },
        };
    } else {
        return state;
    }
}

export default reducer;
