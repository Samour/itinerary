import { Factory } from '@itinerary/ioc/ApplicationContext';
import { ApplicationContextStrategyHolder } from '@itinerary/ioc/ApplicationContextHolder';

export type Bean<T> = () => T;

export const bean = (dependencies: Bean<any>[] = []) => <A extends any[], T>(factory: Factory<A, T>): Bean<T> => {
  return () => {
    return ApplicationContextStrategyHolder.getApplicationContextStrategy()
      .getApplicationContext()
      .getBeanFromDefinition(factory, dependencies);
  };
};
