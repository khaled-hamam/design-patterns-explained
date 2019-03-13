import { SingletonLogger, ExtendedSingletonLogger, ISingletonLogger } from './example';

describe('Singleton Pattern', () => {
  it('should get a working instance', () => {
    const logger: ISingletonLogger = SingletonLogger.instance;
    expect(logger.log()).toBe(1);
  });

  it('should use polymorphims correctly', () => {
    const extendedLogger: ISingletonLogger = ExtendedSingletonLogger.instance;
    expect(extendedLogger.log()).toBe(2);
  });
});
