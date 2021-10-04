import {CreateItineraryState, InputField} from "src/store/models/CreateItineraryState";
import IMutation from "src/store/mutations/IMutation";
import MutationType from "src/store/mutations/MutationType";
import {CreateItinerarySetNameMutation} from "src/store/mutations/createItinerary/CreateItinerarySetNameMutation";
import {CreateItinerarySetDescriptionMutation} from "src/store/mutations/createItinerary/CreateItinerarySetDescriptionMutation";
import {CreateItinerarySetStartTimeMutation} from "src/store/mutations/createItinerary/CreateItinerarySetStartTimeMutation";
import {CreateItinerarySetEndTimeMutation} from "src/store/mutations/createItinerary/CreateItinerarySetEndTimeMutation";
import {CreateItineraryNameInvalidMutation} from "src/store/mutations/createItinerary/CreateItineraryNameInvalidMutation";
import {CreateItineraryStartTimeInvalidMutation} from "src/store/mutations/createItinerary/CreateItineraryStartTimeInvalidMutation";
import {CreateItineraryEndTimeInvalidMutation} from "src/store/mutations/createItinerary/CreateItineraryEndTimeInvalidMutation";

const inputField = <T>(value?: T | null): InputField<T> => ({
    value: value ?? null,
    error: false,
    errorMessage: null,
});

const initialState: CreateItineraryState = {
    name: inputField(),
    description: inputField(),
    startTime: inputField(),
    endTime: inputField(),
};

const reducer = (state: CreateItineraryState | undefined, mutation: IMutation): CreateItineraryState => {
    if (!state) {
        state = initialState;
    }

    if (mutation.type === MutationType.CREATE_ITINERARY_SET_NAME) {
        const {name} = mutation as CreateItinerarySetNameMutation;
        return {
            ...state,
            name: inputField(name),
        };
    } else if (mutation.type === MutationType.CREATE_ITINERARY_NAME_INVALID) {
        const {errorMessage} = mutation as CreateItineraryNameInvalidMutation;
        return {
            ...state,
            name: {
                ...state.name,
                error: true,
                errorMessage,
            },
        };
    } else if (mutation.type === MutationType.CREATE_ITINERARY_SET_DESCRIPTION) {
        const {description} = mutation as CreateItinerarySetDescriptionMutation;
        return {
            ...state,
            description: inputField(description),
        };
    } else if (mutation.type === MutationType.CREATE_ITINERARY_SET_START_DATE) {
        const {startTime} = mutation as CreateItinerarySetStartTimeMutation;
        return {
            ...state,
            startTime: inputField(startTime),
        };
    } else if (mutation.type === MutationType.CREATE_ITINERARY_START_DATE_INVALID) {
        const {errorMessage} = mutation as CreateItineraryStartTimeInvalidMutation;
        return {
            ...state,
            startTime: {
                ...state.startTime,
                error: true,
                errorMessage,
            },
        };
    } else if (mutation.type === MutationType.CREATE_ITINERARY_SET_END_DATE) {
        const {endTime} = mutation as CreateItinerarySetEndTimeMutation;
        return {
            ...state,
            endTime: inputField(endTime),
        };
    } else if (mutation.type === MutationType.CREATE_ITINERARY_END_DATE_INVALID) {
        const {errorMessage} = mutation as CreateItineraryEndTimeInvalidMutation;
        return {
            ...state,
            endTime: {
                ...state.endTime,
                error: true,
                errorMessage,
            },
        };
    } else if (mutation.type === MutationType.CREATE_ITINERARY_CLEAR_INPUTS) {
        return initialState;
    } else {
        return state;
    }
};

export default reducer;
