import {Dayjs} from "dayjs";
import MutationType from "../MutationType";
import IMutation from "../IMutation";

export interface CreateItinerarySetStartTimeMutation extends IMutation {
    type: MutationType.CREATE_ITINERARY_SET_START_DATE;
    startTime: Dayjs | null;
}

export const createItinerarySetStartTimeMutation = (startTime: Dayjs | null): CreateItinerarySetStartTimeMutation => ({
    type: MutationType.CREATE_ITINERARY_SET_START_DATE,
    startTime,
});
