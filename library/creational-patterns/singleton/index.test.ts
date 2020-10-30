import { SingletonLogger, ExtendedSingletonLogger } from "./example_1";

describe("Singleton Pattern", () => {
  it("should get a working instance", () => {
    const logger: SingletonLogger = SingletonLogger.instance;
    expect(logger.log()).toBe(1);
  });

  it("should use polymorphims correctly", () => {
    const extendedLogger: SingletonLogger = ExtendedSingletonLogger.instance;
    expect(extendedLogger.log()).toBe(2);
  });

  it("should return the same instance", () => {
    const logger: SingletonLogger = SingletonLogger.instance;
    const logger2: SingletonLogger = SingletonLogger.instance;

    expect(logger === logger2).toBe(true);
  });
});
