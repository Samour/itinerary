import {Dayjs} from "dayjs";
import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItinerarySetEndTimeMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_SET_END_DATE;
    endTime: Dayjs | null;
}

export const createItinerarySetEndTimeMutation = (endTime: Dayjs | null): CreateItinerarySetEndTimeMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_END_DATE,
    endTime,
});
