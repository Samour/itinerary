import { IApplicationContext } from './ApplicationContext';

export interface IApplicationContextStrategy {
  setApplicatonContext(applicationContext: IApplicationContext): void;

  getApplicationContext(): IApplicationContext;
}
