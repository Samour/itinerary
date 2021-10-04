import MutationType from "../MutationType";

export interface CreateItineraryClearInputsMutation {
    type: MutationType.CREATE_ITINERARY_CLEAR_INPUTS;
}

export const createItineraryClearInputsMutation = (): CreateItineraryClearInputsMutation => ({
    type: MutationType.CREATE_ITINERARY_CLEAR_INPUTS,
});
