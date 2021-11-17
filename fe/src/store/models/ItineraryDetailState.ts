import {ItineraryDto} from "src/models/ItineraryDto";

export interface ItineraryDetailState {
    loading: boolean;
    itinerary: ItineraryDto | null;
}
