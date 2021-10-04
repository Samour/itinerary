import MutationType from "../MutationType";

export interface CreateItineraryStartTimeInvalidMutation {
    type: MutationType.CREATE_ITINERARY_START_DATE_INVALID;
    errorMessage: string;
}

export const createItineraryStartTimeInvalidMutation = (errorMessage: string): CreateItineraryStartTimeInvalidMutation => ({
    type: MutationType.CREATE_ITINERARY_START_DATE_INVALID,
    errorMessage,
});
