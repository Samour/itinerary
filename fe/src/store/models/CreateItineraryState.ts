import {Dayjs} from "dayjs";

export interface InputField<T> {
    value: T | null;
    error: boolean;
    errorMessage: string | null;
}

export interface CreateItineraryState {
    name: InputField<string>;
    description: InputField<string>;
    startTime: InputField<Dayjs>;
    endTime: InputField<Dayjs>;
}
