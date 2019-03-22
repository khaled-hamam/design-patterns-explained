export interface Coffee {
  price: number;
}

export class Espresso implements Coffee {
  public get price(): number {
    return 30;
  }
}

export class AmericanCoffee implements Coffee {
  public get price(): number {
    return 40;
  }
}

export class Vanilla implements Coffee {
  private _component: Coffee;

  constructor(coffee: Coffee) {
    this._component = coffee;
  }

  public get price() {
    return 5 + this._component.price;
  }
}

export class Chocolate implements Coffee {
  private _component: Coffee;

  constructor(coffee: Coffee) {
    this._component = coffee;
  }

  public get price() {
    return 10 + this._component.price;
  }
}
