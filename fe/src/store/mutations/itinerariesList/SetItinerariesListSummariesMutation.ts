import IMutation from "../IMutation";
import MutationType from "../MutationType";
import {ItinerarySummaryDto} from "src/models/ItineraryDto";

export interface SetItinerariesListSummariesMutation extends IMutation {
    type: MutationType.SET_ITINERARIES_LIST_SUMMARIES;
    itineraries: ItinerarySummaryDto[];
}

export const setItinerariesListSummariesMutation = (itineraries: ItinerarySummaryDto[]) => ({
    type: MutationType.SET_ITINERARIES_LIST_SUMMARIES,
    itineraries,
});
