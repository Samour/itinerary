import { bean } from '@itinerary/ioc/bean';
import { Optional } from '@itinerary/structures/Optional';
import { Itinerary } from 'models/Itinerary';

const autoIncrement = bean(() => {
  let nextValue = 1;

  return () => nextValue++;
});

const mockStorage = bean((): { [_id: string]: Itinerary } => ({}));

export const findItinerary = bean(() => (id: string): Optional<Itinerary> => {
  return Optional.ofNullable(mockStorage()[id]);
});

export const save = bean(() => (itinerary: Itinerary): void => {
  if (!itinerary._id) {
    itinerary._id = `${autoIncrement()()}`;
  }
  mockStorage()[itinerary._id] = itinerary;
});
