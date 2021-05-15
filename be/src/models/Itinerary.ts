export type Address = string; // This will likely be a more complex structure later

export enum ItineraryItemType {
  ATTRACTION = 'ATTRACTION',
  TRANSPORT = 'TRANSPORT',
}

export interface ItineraryItem {
  title: string;
  location: Address;
  startTime: Date;
  endTime: Date;
}

export interface Itinerary {
  _id: string;
  title: string;
  items: ItineraryItem[];
}
