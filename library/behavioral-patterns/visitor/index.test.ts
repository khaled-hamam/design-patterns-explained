import { Investor, BankAccount, RealEstate, MarketValueVisitor, MonthlyIncomeVisitor } from './example_1';

describe('Visitor Pattern', () => {
  describe('Example 1 Tests', () => {
    let investor: Investor;

    beforeAll(() => {
      investor = new Investor('Khaled', [
        new BankAccount(1000, 0.12),
        new BankAccount(3000, 0.09),
        new RealEstate(9000, 100)
      ]);
    });

    it('should calculate market value correctly', () => {
      const visitor = new MarketValueVisitor();
      investor.accept(visitor);

      expect(visitor.value).toBe(13000);
    });

    it('should calculate monthly income correctly', () => {
      const visitor = new MonthlyIncomeVisitor();
      investor.accept(visitor);

      expect(visitor.value).toBe(1000 * 0.12 + 3000 * 0.09 + 100);
    });
  });
});
