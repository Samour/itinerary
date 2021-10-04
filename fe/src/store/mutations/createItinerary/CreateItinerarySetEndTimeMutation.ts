import MutationType from "../MutationType";
import {Dayjs} from "dayjs";

export interface CreateItinerarySetEndTimeMutation {
    type: MutationType.CREATE_ITINERARY_SET_END_DATE;
    endTime: Dayjs | null;
}

export const createItinerarySetEndTimeMutation = (endTime: Dayjs | null): CreateItinerarySetEndTimeMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_END_DATE,
    endTime,
});
