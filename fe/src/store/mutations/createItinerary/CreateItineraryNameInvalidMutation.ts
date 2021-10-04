import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItineraryNameInvalidMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_NAME_INVALID;
    errorMessage: string;
}

export const createItineraryNameInvalidMutation = (errorMessage: string): CreateItineraryNameInvalidMutation => ({
    type: MutationType.CREATE_ITINERARY_NAME_INVALID,
    errorMessage,
});
