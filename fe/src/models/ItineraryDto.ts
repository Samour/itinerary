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
