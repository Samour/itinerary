import MutationType from "../MutationType";

export interface CreateItinerarySetNameMutation {
    type: MutationType.CREATE_ITINERARY_SET_NAME;
    name: string | null;
}

export const createItinerarySetNameMutation = (name: string | null): CreateItinerarySetNameMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_NAME,
    name,
});
