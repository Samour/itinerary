import {ItineraryDto} from "src/models/ItineraryDto";
import IMutation from "../IMutation";
import MutationType from "../MutationType";

export interface SetItineraryDetailMutation extends IMutation {
    type: MutationType.SET_ITINERARY_DETAIL;
    itinerary: ItineraryDto;
}

export const setItineraryDetailMutation = (itinerary: ItineraryDto): SetItineraryDetailMutation => ({
    type: MutationType.SET_ITINERARY_DETAIL,
    itinerary,
});
