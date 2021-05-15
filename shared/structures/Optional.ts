const isNull = (value: any): boolean => value === null || value === undefined;

export class Optional<T> {

  private constructor(private readonly value: T | null) {
  }

  static of<T>(value: T): Optional<T> {
    if (isNull(value)) {
      throw new Error('Value provided is null');
    }
    return new Optional(value);
  }

  static empty<T>(): Optional<T> {
    return new Optional(null);
  }

  static ofNullable<T>(value: T | null | undefined): Optional<T> {
    if (isNull(value)) {
      return Optional.empty();
    } else {
      return Optional.of(value);
    }
  }

  filter(predicate: (value: T) => boolean): Optional<T> {
    if (isNull(this.value) || !predicate(this.value)) {
      return Optional.empty();
    } else {
      return this;
    }
  }

  map<R>(mapper: (value: T) => R): Optional<R> {
    if (isNull(this.value)) {
      return Optional.empty();
    } else {
      return Optional.ofNullable(mapper(this.value));
    }
  }

  get(): T {
    if (isNull(this.value)) {
      throw new Error('Cannot get value from empty Optional');
    } else {
      return this.value;
    }
  }

  orElse(value: T): T {
    if (isNull(this.value)) {
      return value;
    } else {
      return this.value;
    }
  }

  orElseGet(provider: () => T): T {
    if (isNull(this.value)) {
      return provider();
    } else {
      return this.value;
    }
  }

  ifPresent(consumer: (value: T) => void): void {
    if (!isNull(this.value)) {
      consumer(this.value);
    }
  }

  ifPresentOrElse(consumer: (value: T) => void, action: () => void): void {
    if (isNull(this.value)) {
      action();
    } else {
      consumer(this.value);
    }
  }
}
