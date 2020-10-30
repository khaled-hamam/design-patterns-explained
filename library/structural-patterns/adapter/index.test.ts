import {
  CalculatorAdapter1,
  ICalculatorAdapter,
  CalculatorAdapter2,
} from "./example_1";
import { LegacyRectangle, IShape, Rectangle } from "./example_2";

describe("Adapter Pattern", () => {
  describe("Example 1 Tests", () => {
    it("should calculate correctly with adapter 1", () => {
      const calculator: ICalculatorAdapter = new CalculatorAdapter1();
      expect(calculator.sum(1, 2)).toBe(3);
    });

    it("should calculate correctly with adapter 2", () => {
      const calculator: ICalculatorAdapter = new CalculatorAdapter2();
      expect(calculator.sum(1, 2)).toBe(3);
    });
  });

  describe("Example 2 Tests", () => {
    it("should adapt LegacyRectangle to Shape Interface", () => {
      const legacyRect: LegacyRectangle = new LegacyRectangle();
      const newRect: IShape = new Rectangle();

      const legacyOutput = legacyRect.display(0, 0, 10, 6);
      const newOutput = newRect.display(-5, -3, 5, 3);

      expect(newOutput).toBe(legacyOutput);
    });
  });
});
