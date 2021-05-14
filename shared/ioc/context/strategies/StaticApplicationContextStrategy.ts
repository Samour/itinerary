import { IApplicationContextStrategy } from '@itinerary/ioc/ApplicationContextStrategy';
import { IApplicationContext, ApplicationContext } from '@itinerary/ioc/ApplicationContext';

export class StaticApplicationContextStrategy implements IApplicationContextStrategy {

  private static applicationContext: IApplicationContext = new ApplicationContext();

  setApplicatonContext(applicationContext: IApplicationContext): void {
    StaticApplicationContextStrategy.applicationContext = applicationContext;
  }

  getApplicationContext(): IApplicationContext {
    return StaticApplicationContextStrategy.applicationContext;
  }
}
