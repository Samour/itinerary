import {CreateItineraryRequest, ItineraryListDto, ItinerarySummaryDto} from "../models/ItineraryDto";
import {IHttpService, useHttpService} from "./HttpService";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {setItinerariesListSummariesMutation} from "src/store/mutations/itinerariesList/SetItinerariesListSummariesMutation";
import {openItineraryDeleteModalMutation} from "src/store/mutations/itinerariesList/OpenItineraryDeleteModalMutation";
import {closeItineraryDeleteModalMutation} from "src/store/mutations/itinerariesList/CloseItineraryDeleteModalMutation";
import {itineraryDeleteInProgressMutation} from "src/store/mutations/itinerariesList/ItineraryDeleteInProgressMutation";

export interface IItineraryService {
    createItinerary(itinerary: CreateItineraryRequest): Promise<void>;

    loadItinerariesList(): void;

    openDeleteModal(itinerary: ItinerarySummaryDto): void;

    closeDeleteModal(): void;

    confirmItineraryDelete(itineraryId: string): void;
}

class ItineraryService implements IItineraryService {

    constructor(private readonly httpService: IHttpService,
                private readonly dispatch: Dispatch) {
    }

    async createItinerary(itinerary: CreateItineraryRequest): Promise<void> {
        await this.httpService.post<CreateItineraryRequest, void>('/itineraries', itinerary);
    }

    loadItinerariesList(): void {
        this.httpService.get<ItineraryListDto>('/itineraries')
            .then(({itineraries}) => setItinerariesListSummariesMutation(itineraries))
            .then((mutation) => this.dispatch(mutation))
            .catch(console.error);
    }

    openDeleteModal(itinerary: ItinerarySummaryDto): void {
        this.dispatch(openItineraryDeleteModalMutation(itinerary));
    }

    closeDeleteModal(): void {
        this.dispatch(closeItineraryDeleteModalMutation());
    }

    confirmItineraryDelete(itineraryId: string): void {
        this.dispatch(itineraryDeleteInProgressMutation(true));
        this.httpService.delete(`/itineraries/${itineraryId}`)
            .then(() => this.closeDeleteModal())
            .then(() => this.loadItinerariesList())
            .catch(console.error);
    }
}

export const useItineraryService = (): IItineraryService => {
    const httpService = useHttpService();
    const dispatch = useDispatch();

    return new ItineraryService(httpService, dispatch);
};
