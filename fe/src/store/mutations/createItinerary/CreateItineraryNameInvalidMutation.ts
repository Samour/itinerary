import MutationType from "../MutationType";

export interface CreateItineraryNameInvalidMutation {
    type: MutationType.CREATE_ITINERARY_NAME_INVALID;
    errorMessage: string;
}

export const createItineraryNameInvalidMutation = (errorMessage: string): CreateItineraryNameInvalidMutation => ({
    type: MutationType.CREATE_ITINERARY_NAME_INVALID,
    errorMessage,
});
