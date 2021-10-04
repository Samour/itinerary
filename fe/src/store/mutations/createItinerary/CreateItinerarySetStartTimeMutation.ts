import MutationType from "../MutationType";
import {Dayjs} from "dayjs";

export interface CreateItinerarySetStartTimeMutation {
    type: MutationType.CREATE_ITINERARY_SET_START_DATE;
    startTime: Dayjs | null;
}

export const createItinerarySetStartTimeMutation = (startTime: Dayjs | null): CreateItinerarySetStartTimeMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_START_DATE,
    startTime,
});
