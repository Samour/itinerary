import {ItineraryListDto} from "../models/ItineraryDto";
import {IHttpService, useHttpService} from "./HttpService";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {setItinerariesListSummariesMutation} from "src/store/mutations/itinerariesList/SetItinerariesListSummariesMutation";

export interface IItineraryService {
    loadItinerariesList(): void;
}

class ItineraryService implements IItineraryService {

    constructor(private readonly httpService: IHttpService,
                private readonly dispatch: Dispatch) {
    }

    loadItinerariesList(): void {
        this.httpService.get<ItineraryListDto>('/itineraries')
            .then(({itineraries}) => setItinerariesListSummariesMutation(itineraries))
            .then((mutation) => this.dispatch(mutation))
            .catch(console.error);
    }
}

export const useItineraryService = (): IItineraryService => {
    const httpService = useHttpService();
    const dispatch = useDispatch();

    return new ItineraryService(httpService, dispatch);
};
