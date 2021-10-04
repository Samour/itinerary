import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CloseItineraryDeleteModalMutation extends IMutation {
    type: MutationType.CLOSE_ITINERARY_DELETE_MODAL;
}

export const closeItineraryDeleteModalMutation = (): CloseItineraryDeleteModalMutation => ({
    type: MutationType.CLOSE_ITINERARY_DELETE_MODAL,
});
