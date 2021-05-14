import { IApplicationContextStrategy } from '@itinerary/ioc/ApplicationContextStrategy';
import { StaticApplicationContextStrategy } from '@itinerary/ioc/context/strategies/StaticApplicationContextStrategy';

// A runtime may have only a single application context strategy
export class ApplicationContextStrategyHolder {

  private static applicationContextStrategy: IApplicationContextStrategy = new StaticApplicationContextStrategy();

  static setApplicationContextStrategy(strategy: IApplicationContextStrategy): void {
    ApplicationContextStrategyHolder.applicationContextStrategy = strategy;
  }

  static getApplicationContextStrategy(): IApplicationContextStrategy {
    return ApplicationContextStrategyHolder.applicationContextStrategy;
  }
}
