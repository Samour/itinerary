import {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Dayjs} from "dayjs";
import {useItineraryService} from "src/services/ItineraryService";
import {RouteLocations} from "src/models/RouteLocations";

export interface InputField<T> {
    value: T | null;
    error: boolean;
    errorMessage: string | null;
}

const inputField = <T>(): InputField<T> => ({
    value: null,
    error: false,
    errorMessage: null,
});

export const useCreateItineraryForm = () => {
    const [name, setName] = useState(inputField<string>());
    const [description, setDescription] = useState(inputField<string>());
    const [startTime, setStartTime] = useState(inputField<Dayjs>());
    const [endTime, setEndTime] = useState(inputField<Dayjs>());

    const history = useHistory();
    const itineraryService = useItineraryService();

    const setFieldAndClearError = <T>(setter: (value: InputField<T>) => void) => (value: T | null): void =>
        setter({
            value,
            error: false,
            errorMessage: null,
        });

    const validateAndSave = (): void => {
        let hasError = false;
        const populateError = <T>(value: InputField<T>, setter: (v: InputField<T>) => void) => (errorMessage: string) => {
            setter({
                ...value,
                error: true,
                errorMessage,
            });
            hasError = true;
        };

        if (!name.value?.length) {
            populateError(name, setName)('Name must be provided');
        }

        if (startTime.value && endTime.value) {
            if (!endTime.value.isAfter(startTime.value)) {
                populateError(endTime, setEndTime)('End date must come after start date');
            }
        } else {
            if (!startTime.value) {
                populateError(startTime, setStartTime)('Start date must be provided');
            }
            if (!endTime.value) {
                populateError(endTime, setEndTime)('End date must be populated');
            }
        }

        if (hasError) {
            return;
        }

        itineraryService.createItinerary({
            name: name.value as string,
            description: description.value ?? '',
            startTime: (startTime.value as Dayjs).toISOString(),
            endTime: (endTime.value as Dayjs).toISOString(),
        }).then(() => {
            history.push(RouteLocations.ITINERARIES_LIST);
        }).catch(console.log);
    };

    return {
        name,
        setName: setFieldAndClearError(setName),
        description,
        setDescription: setFieldAndClearError(setDescription),
        startTime,
        setStartTime: setFieldAndClearError(setStartTime),
        endTime,
        setEndTime: setFieldAndClearError(setEndTime),
        validateAndSave,
    };
};
