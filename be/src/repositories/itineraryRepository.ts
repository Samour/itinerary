import { Bean, bean } from '@itinerary/ioc/bean';
import { Optional } from '@itinerary/structures/Optional';
import { Itinerary } from 'models/Itinerary';

type AutoIncrement = () => number;
const autoIncrement: Bean<AutoIncrement> = bean()(() => {
  let nextValue = 1;

  return () => nextValue++;
});

type ItineraryStore = { [_id: string]: Itinerary };
const mockStorage: Bean<ItineraryStore> = bean()(() => ({}));

export type FindItineraryFn = (id: string) => Optional<Itinerary>;
export const findItinerary: Bean<FindItineraryFn> = bean([mockStorage])((mockStorage: ItineraryStore) => (id) => {
  return Optional.ofNullable(mockStorage[id]);
});

export type SaveItineraryFn = (itinerary: Itinerary) => void;
export const save: Bean<SaveItineraryFn> = bean([
  autoIncrement,
  mockStorage,
])((autoIncrement: AutoIncrement, mockStorage: ItineraryStore) =>
  (itinerary) => {
    if (!itinerary._id) {
      itinerary._id = `${autoIncrement()}`;
    }
    mockStorage[itinerary._id] = itinerary;
  });
