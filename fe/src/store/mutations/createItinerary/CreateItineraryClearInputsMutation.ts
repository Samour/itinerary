import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItineraryClearInputsMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_CLEAR_INPUTS;
}

export const createItineraryClearInputsMutation = (): CreateItineraryClearInputsMutation => ({
    type: MutationType.CREATE_ITINERARY_CLEAR_INPUTS,
});
