import { ApplicationContextStrategyHolder } from '@itinerary/ioc/ApplicationContextHolder';

export const bean = <T>(factory: () => T): () => T => {
  return () => {
    return ApplicationContextStrategyHolder.getApplicationContextStrategy()
      .getApplicationContext()
      .getBean(factory);
  };
};
