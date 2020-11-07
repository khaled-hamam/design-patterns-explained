interface InvestorVisitor {
  visitBankAccount(account: BankAccount): void;
  visitRealEstate(realestate: RealEstate): void;
}

interface IVisitable {
  accept(visitor: InvestorVisitor): void;
}

interface Asset extends IVisitable {
  describe(): string;
}

export class BankAccount implements Asset {
  public constructor(public amount: number, public interest: number) {}

  public describe() {
    return `[Bank Account] Amount: $${this.amount} | Monthly Interest: ${this.interest}`;
  }

  public accept(visitor: InvestorVisitor) {
    visitor.visitBankAccount(this);
  }
}

export class RealEstate implements Asset {
  public constructor(public value: number, public monthlyRent: number) {}

  public describe() {
    return `[RealEstate] Value: $${this.value} | Monthl Rent: $${this.monthlyRent}`;
  }

  public accept(visitor: InvestorVisitor) {
    visitor.visitRealEstate(this);
  }
}

export class Investor implements IVisitable {
  public name: string;
  public assets: Asset[];

  public constructor(name: string, assets?: Asset[]) {
    this.name = name;
    this.assets = assets || [];
  }

  public accept(visitor: InvestorVisitor) {
    this.assets.forEach((asset) => {
      asset.accept(visitor);
    });
  }
}

export class MarketValueVisitor implements InvestorVisitor {
  public value = 0;

  public visitBankAccount(account: BankAccount): void {
    this.value += account.amount;
  }

  public visitRealEstate(realestate: RealEstate): void {
    this.value += realestate.value;
  }
}

export class MonthlyIncomeVisitor implements InvestorVisitor {
  public value = 0;

  public visitBankAccount(account: BankAccount): void {
    this.value += account.interest * account.amount;
  }

  public visitRealEstate(realestate: RealEstate): void {
    this.value += realestate.monthlyRent;
  }
}
