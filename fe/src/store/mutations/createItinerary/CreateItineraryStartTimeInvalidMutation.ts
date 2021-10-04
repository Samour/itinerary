import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItineraryStartTimeInvalidMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_START_DATE_INVALID;
    errorMessage: string;
}

export const createItineraryStartTimeInvalidMutation = (errorMessage: string): CreateItineraryStartTimeInvalidMutation => ({
    type: MutationType.CREATE_ITINERARY_START_DATE_INVALID,
    errorMessage,
});
