const __INITIALISING = '__INITIALISING';

export type Factory<A extends any[], T> = (...deps: A) => T;

export interface IApplicationContext {
  getBeanFromDefinition<A extends any[], R, T extends Factory<A, R>>(factory: T, dependencies: (() => any)[]): R;
}

export class ApplicationContext implements IApplicationContext {

  private beansMap: Map<Factory<any, any>, any> = new Map();

  getBeanFromDefinition<A extends any[], R, T extends Factory<A, R>>(factory: T, dependencies: (() => any)[]): R {
    if (!this.beansMap.has(factory)) {
      this.beansMap.set(factory, __INITIALISING);
    } else if (this.beansMap.get(factory) === __INITIALISING) {
      throw new Error('Error retrieving bean - definition is reentrant');
    } else {
      return this.beansMap.get(factory);
    }

    const resolvedDependencies = dependencies.map((b) => b());
    const bean = factory(...(resolvedDependencies as A));
    this.beansMap.set(factory, bean);

    return bean;
  }
}
