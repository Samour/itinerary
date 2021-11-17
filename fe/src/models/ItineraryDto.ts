export interface ItinerarySummaryDto {
    id: string;
    name: string;
    description: string;
    startTime: string;
    endTime: string;
}

export interface ItineraryListDto {
    itineraries: ItinerarySummaryDto[];
}

export interface CreateItineraryRequest {
    name: string;
    description: string;
    startTime: string;
    endTime: string;
}

export enum ItineraryItemType {
    LOCATION = 'LOCATION',
    TRAVEL = 'TRAVEL',
}

export interface LocationDto {
    latitude: number;
    longitude: number;
}

export interface ItineraryItemDto {
    id: string;
    name: string;
    description: string;
    type: ItineraryItemType;
    primaryLocation: LocationDto;
    secondaryLocations: LocationDto[];
    startTime: string;
    endTime: string;
}

export interface ItineraryDto extends ItinerarySummaryDto {
    items: ItineraryItemDto[];
}
