import { SingletonLogger, ExtendedSingletonLogger } from './example';

describe('Singleton Pattern', () => {
  it('should get a working instance', () => {
    const logger: SingletonLogger = SingletonLogger.instance;
    expect(logger.log()).toBe(1);
  });

  it('should use polymorphims correctly', () => {
    const extendedLogger: SingletonLogger = ExtendedSingletonLogger.instance;
    expect(extendedLogger.log()).toBe(2);
  });
});
