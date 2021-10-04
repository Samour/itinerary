import {ItinerarySummaryDto} from "src/models/ItineraryDto";
import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface OpenItineraryDeleteModalMutation extends IMutation {
    type: MutationType.OPEN_ITINERARY_DELETE_MODAL;
    itinerary: ItinerarySummaryDto;
}

export const openItineraryDeleteModalMutation = (itinerary: ItinerarySummaryDto): OpenItineraryDeleteModalMutation => ({
    type: MutationType.OPEN_ITINERARY_DELETE_MODAL,
    itinerary,
});
