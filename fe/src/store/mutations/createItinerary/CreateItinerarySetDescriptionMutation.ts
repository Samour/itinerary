import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItinerarySetDescriptionMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_SET_DESCRIPTION;
    description: string | null;
}

export const createItinerarySetDescriptionMutation = (description: string | null): CreateItinerarySetDescriptionMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_DESCRIPTION,
    description,
});
