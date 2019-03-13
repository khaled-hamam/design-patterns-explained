export interface ISingletonLogger {
  log(): number;
}

export class SingletonLogger implements ISingletonLogger {
  protected static _instance: SingletonLogger;

  protected constructor() {}

  public static get instance(): SingletonLogger {
    if (SingletonLogger._instance === undefined) {
      SingletonLogger._instance = new SingletonLogger();
    }

    return SingletonLogger._instance;
  }

  public log(): number {
    // Logging Logic
    return 1;
  }
}

export class ExtendedSingletonLogger implements ISingletonLogger {
  protected static _instance: ExtendedSingletonLogger;

  public static get instance(): SingletonLogger {
    if (ExtendedSingletonLogger._instance === undefined) {
      ExtendedSingletonLogger._instance = new ExtendedSingletonLogger();
    }

    return ExtendedSingletonLogger._instance;
  }

  public log(): number {
    // Extended Logging Logic
    return 2;
  }
}
