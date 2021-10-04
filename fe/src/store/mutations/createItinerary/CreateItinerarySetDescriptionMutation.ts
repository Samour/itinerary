import MutationType from "../MutationType";

export interface CreateItinerarySetDescriptionMutation {
    type: MutationType.CREATE_ITINERARY_SET_DESCRIPTION;
    description: string | null;
}

export const createItinerarySetDescriptionMutation = (description: string | null): CreateItinerarySetDescriptionMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_DESCRIPTION,
    description,
});
