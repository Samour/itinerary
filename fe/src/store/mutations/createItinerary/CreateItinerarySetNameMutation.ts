import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItinerarySetNameMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_SET_NAME;
    name: string | null;
}

export const createItinerarySetNameMutation = (name: string | null): CreateItinerarySetNameMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_NAME,
    name,
});
