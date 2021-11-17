import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface ItineraryDetailLoadingMutation extends IMutation {
    type: MutationType.ITINERARY_DETAIL_LOADING;
}

export const itineraryDetailLoadingMutation = (): ItineraryDetailLoadingMutation => ({
    type: MutationType.ITINERARY_DETAIL_LOADING,
});
