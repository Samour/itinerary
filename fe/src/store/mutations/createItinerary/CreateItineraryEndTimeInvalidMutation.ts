import MutationType from "../MutationType";

export interface CreateItineraryEndTimeInvalidMutation {
    type: MutationType.CREATE_ITINERARY_END_DATE_INVALID;
    errorMessage: string;
}

export const createItineraryEndTimeInvalidMutation = (errorMessage: string): CreateItineraryEndTimeInvalidMutation => ({
    type: MutationType.CREATE_ITINERARY_END_DATE_INVALID,
    errorMessage,
});
