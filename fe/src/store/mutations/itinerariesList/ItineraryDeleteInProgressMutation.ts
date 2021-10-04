import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface ItineraryDeleteInProgressMutation extends IMutation {
    type: MutationType.ITINERARY_DELETE_IN_PROGRESS;
    deleteInProgress: boolean;
}

export const itineraryDeleteInProgressMutation = (deleteInProgress: boolean): ItineraryDeleteInProgressMutation => ({
    type: MutationType.ITINERARY_DELETE_IN_PROGRESS,
    deleteInProgress,
});
