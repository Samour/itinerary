import {Dayjs} from "dayjs";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {History} from "history";
import {createItinerarySetNameMutation} from "src/store/mutations/createItinerary/CreateItinerarySetNameMutation";
import {createItinerarySetDescriptionMutation} from "src/store/mutations/createItinerary/CreateItinerarySetDescriptionMutation";
import {createItinerarySetStartTimeMutation} from "src/store/mutations/createItinerary/CreateItinerarySetStartTimeMutation";
import {createItinerarySetEndTimeMutation} from "src/store/mutations/createItinerary/CreateItinerarySetEndTimeMutation";
import IMutation from "src/store/mutations/IMutation";
import {CreateItineraryState} from "src/store/models/CreateItineraryState";
import {AppState} from "src/store/models/AppState";
import {createItineraryNameInvalidMutation} from "src/store/mutations/createItinerary/CreateItineraryNameInvalidMutation";
import {createItineraryEndTimeInvalidMutation} from "src/store/mutations/createItinerary/CreateItineraryEndTimeInvalidMutation";
import {createItineraryStartTimeInvalidMutation} from "src/store/mutations/createItinerary/CreateItineraryStartTimeInvalidMutation";
import {CreateItineraryRequest} from "src/models/ItineraryDto";
import {RouteLocations} from "src/models/RouteLocations";
import {createItineraryClearInputsMutation} from "src/store/mutations/createItinerary/CreateItineraryClearInputsMutation";
import {IHttpService, useHttpService} from "./HttpService";

export interface ICreateItineraryService {
    setName(name: string | null): void;

    setDescription(description: string | null): void;

    setStartTime(startTime: Dayjs | null): void;

    setEndTime(endTime: Dayjs | null): void;

    validateAndSave(): void;
}

class CreateItineraryService implements ICreateItineraryService {

    constructor(private readonly formState: CreateItineraryState, private readonly dispatch: Dispatch,
                private readonly history: History, private readonly httpService: IHttpService) {
    }

    setName(name: string | null): void {
        this.dispatch(createItinerarySetNameMutation(name));
    }

    setDescription(description: string | null): void {
        this.dispatch(createItinerarySetDescriptionMutation(description));
    }

    setStartTime(startTime: Dayjs | null): void {
        const adjustedTime = startTime?.startOf('day') ?? null;

        this.dispatch(createItinerarySetStartTimeMutation(adjustedTime));
    }

    setEndTime(endTime: Dayjs | null): void {
        const adjustedTime = endTime?.endOf('day') ?? null;

        this.dispatch(createItinerarySetEndTimeMutation(adjustedTime));
    }

    validateAndSave(): void {
        const invalidMutations: IMutation[] = [];
        if (!this.formState.name.value?.length) {
            invalidMutations.push(createItineraryNameInvalidMutation('Name must be provided'));
        }

        if (this.formState.startTime.value && this.formState.endTime.value) {
            if (!this.formState.endTime.value.isAfter(this.formState.startTime.value)) {
                invalidMutations.push(createItineraryEndTimeInvalidMutation('End date must come after start date'));
            }
        } else {
            if (!this.formState.startTime.value) {
                invalidMutations.push(createItineraryStartTimeInvalidMutation('Start date must be provided'));
            }
            if (!this.formState.endTime.value) {
                invalidMutations.push(createItineraryEndTimeInvalidMutation('End date must be provided'));
            }
        }

        if (invalidMutations.length) {
            invalidMutations.forEach((m) => this.dispatch(m));
            return;
        }

        this.httpService.post<CreateItineraryRequest, void>('/itineraries', {
            name: this.formState.name.value as string,
            description: this.formState.description.value || '',
            startTime: this.formState.startTime.value?.toISOString() ?? '',
            endTime: this.formState.endTime.value?.toISOString() ?? '',
        }).then(() => {
            this.history.push(RouteLocations.ITINERARIES_LIST);
            this.dispatch(createItineraryClearInputsMutation());
        }).catch(console.log);
    }
}

export const useCreateItineraryService = (): ICreateItineraryService => {
    const formState = useSelector((state: AppState) => state.createItinerary);
    const dispatch = useDispatch();
    const history = useHistory();
    const httpService = useHttpService();

    return new CreateItineraryService(formState, dispatch, history, httpService);
};
