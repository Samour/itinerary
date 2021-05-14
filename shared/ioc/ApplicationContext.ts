const __INITIALISING = '__INITIALISING';

type Factory<T> = () => T;

export interface IApplicationContext {
  getBean<R, T extends Factory<R>>(factory: T): R;
}

export class ApplicationContext implements IApplicationContext {

  private beansMap: Map<Factory<any>, any> = new Map();

  getBean<R, T extends Factory<R>>(factory: T): R {
    if (!this.beansMap.has(factory)) {
      this.beansMap.set(factory, __INITIALISING);
    } else if (this.beansMap.get(factory) === __INITIALISING) {
      throw new Error('Error retrieving bean - definition is reentrant');
    } else {
      return this.beansMap.get(factory);
    }

    const bean = factory();
    this.beansMap.set(factory, bean);

    return bean;
  }
}
