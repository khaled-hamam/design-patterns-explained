interface IObserver {
  update(): void;
}

interface IObservable {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
}

export class Currency implements IObservable {
  private _observers: IObserver[];
  private _value: number;

  public constructor() {
    this._observers = [];
  }

  public attach(observer: IObserver) {
    this._observers.push(observer);
  }

  public detach(observer: IObserver) {
    this._observers = this._observers.filter(o => o !== observer);
  }

  public get value(): number {
    return this._value;
  }

  public set value(value) {
    this._value = value;
    this.notify();
  }

  private notify() {
    for (const observer of this._observers) {
      observer.update();
    }
  }
}

export class CurrencyExchangeObserver implements IObserver {
  private _rate: number;
  private _observable: Currency;
  private _value: number;

  public constructor(rate: number, observable: Currency) {
    this._rate = rate;
    this._observable = observable;
    this.update();
  }

  public update() {
    this._value = this._observable.value * this._rate;
    // Maybe send a notification to users if the value > 500
  }

  public get value() {
    return this._value;
  }
}
