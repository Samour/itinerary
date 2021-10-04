import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItineraryEndTimeInvalidMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_END_DATE_INVALID;
    errorMessage: string;
}

export const createItineraryEndTimeInvalidMutation = (errorMessage: string): CreateItineraryEndTimeInvalidMutation => ({
    type: MutationType.CREATE_ITINERARY_END_DATE_INVALID,
    errorMessage,
});
