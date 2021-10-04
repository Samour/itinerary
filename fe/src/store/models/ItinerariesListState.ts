import {ItinerarySummaryDto} from "src/models/ItineraryDto";

export interface ItineraryToDeleteState {
    openConfirmationModal: boolean;
    itinerary: ItinerarySummaryDto | null;
    deleteInProgress: boolean;
}

export interface ItinerariesListState {
    itineraries: ItinerarySummaryDto[];
    itineraryToDelete: ItineraryToDeleteState;
}
