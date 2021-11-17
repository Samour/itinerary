import {CreateItineraryRequest, ItineraryDto, ItineraryListDto, ItinerarySummaryDto} from "../models/ItineraryDto";
import {IHttpService, useHttpService} from "./HttpService";
import {Store} from "redux";
import {useStore} from "react-redux";
import {setItinerariesListSummariesMutation} from "src/store/mutations/itinerariesList/SetItinerariesListSummariesMutation";
import {openItineraryDeleteModalMutation} from "src/store/mutations/itinerariesList/OpenItineraryDeleteModalMutation";
import {closeItineraryDeleteModalMutation} from "src/store/mutations/itinerariesList/CloseItineraryDeleteModalMutation";
import {itineraryDeleteInProgressMutation} from "src/store/mutations/itinerariesList/ItineraryDeleteInProgressMutation";
import {AppState} from "../store/models/AppState";
import {itineraryDetailLoadingMutation} from "../store/mutations/itineraryDetail/ItineraryDetailLoadingMutation";
import {setItineraryDetailMutation} from "../store/mutations/itineraryDetail/SetItineraryDetailMutation";

export interface IItineraryService {
    createItinerary(itinerary: CreateItineraryRequest): Promise<void>;

    loadItinerariesList(): void;

    loadItineraryDetails(itineraryId: String): void;

    openDeleteModal(itinerary: ItinerarySummaryDto): void;

    closeDeleteModal(): void;

    confirmItineraryDelete(itineraryId: string): void;
}

class ItineraryService implements IItineraryService {

    constructor(private readonly httpService: IHttpService,
                private readonly store: Store<AppState>) {
    }

    async createItinerary(itinerary: CreateItineraryRequest): Promise<void> {
        await this.httpService.post<CreateItineraryRequest, void>('/itineraries', itinerary);
    }

    loadItinerariesList(): void {
        this.httpService.get<ItineraryListDto>('/itineraries')
            .then(({itineraries}) => setItinerariesListSummariesMutation(itineraries))
            .then((mutation) => this.store.dispatch(mutation))
            .catch(console.error);
    }

    loadItineraryDetails(itineraryId: String, invalidateCache: boolean = false) {
        if (this.store.getState().itineraryDetail.itinerary?.id === itineraryId && !invalidateCache) {
            return;
        }
        this.store.dispatch(itineraryDetailLoadingMutation());
        this.httpService.get<ItineraryDto>(`/itineraries/${itineraryId}`)
            .then((itinerary) => setItineraryDetailMutation(itinerary))
            .then((mutation) => this.store.dispatch(mutation))
            .catch(console.error);
    }

    openDeleteModal(itinerary: ItinerarySummaryDto): void {
        this.store.dispatch(openItineraryDeleteModalMutation(itinerary));
    }

    closeDeleteModal(): void {
        this.store.dispatch(closeItineraryDeleteModalMutation());
    }

    confirmItineraryDelete(itineraryId: string): void {
        this.store.dispatch(itineraryDeleteInProgressMutation(true));
        this.httpService.delete(`/itineraries/${itineraryId}`)
            .then(() => this.closeDeleteModal())
            .then(() => this.loadItinerariesList())
            .catch(console.error);
    }
}

export const useItineraryService = (): IItineraryService => {
    const httpService = useHttpService();
    const store = useStore<AppState>();

    return new ItineraryService(httpService, store);
};
