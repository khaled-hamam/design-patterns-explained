export class SingletonLogger {
  private static _baseInstance: SingletonLogger;

  protected constructor() {}

  public static get instance(): SingletonLogger {
    if (SingletonLogger._baseInstance === undefined) {
      SingletonLogger._baseInstance = new SingletonLogger();
    }

    return SingletonLogger._baseInstance;
  }

  public log(): number {
    // Logging Logic
    return 1;
  }
}

export class ExtendedSingletonLogger extends SingletonLogger {
  private static _extendedInstance: ExtendedSingletonLogger;

  public static get instance(): SingletonLogger {
    if (ExtendedSingletonLogger._extendedInstance === undefined) {
      ExtendedSingletonLogger._extendedInstance = new ExtendedSingletonLogger();
    }

    return ExtendedSingletonLogger._extendedInstance;
  }

  public log(): number {
    // Extended Logging Logic
    return 2;
  }
}
