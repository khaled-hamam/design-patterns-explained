class Calculator {
  public static getSum(a: number, b: number): number {
    return a + b;
  }
}

class AnotherCalculator {
  public static calcSum(a: number, b: number): number {
    return a + b;
  }
}

export interface ICalculatorAdapter {
  sum(a: number, b: number): number;
}

export class CalculatorAdapter1 implements ICalculatorAdapter {
  public sum(a: number, b: number): number {
    return Calculator.getSum(a, b);
  }
}

export class CalculatorAdapter2 implements ICalculatorAdapter {
  public sum(a: number, b: number): number {
    return AnotherCalculator.calcSum(a, b);
  }
}
