interface Observer {
  update(eventType: string, value: any): void;
}

class EventManager {
  private _listeners: Map<string, Observer[]>;

  public constructor(...operations: string[]) {
    this._listeners = new Map<string, Observer[]>();

    for (const operation of operations) {
      this._listeners.set(operation, []);
    }
  }

  public subscribe(eventType: string, listener: Observer) {
    this._listeners.get(eventType).push(listener);
  }

  public unsubscribe(eventType: string, listener: Observer) {
    let listeners = this._listeners.get(eventType);
    listeners = listeners.filter((l) => l !== listener);
    this._listeners.set(eventType, listeners);
  }

  public notify(eventType: string, value: any) {
    const listeners = this._listeners.get(eventType);
    for (const listener of listeners) {
      listener.update(eventType, value);
    }
  }
}

export class WeatherService {
  public events: EventManager;

  public constructor() {
    this.events = new EventManager('hot', 'cold');
  }

  public setWeather(value: number) {
    if (value > 30) {
      this.events.notify('hot', value);
    } else if (value < 5) {
      this.events.notify('cold', value);
    }
  }

  public updateWeather() {
    // Maybe get weather from public API
    // In real case scenario, setWeather should be private
    // and called here with the fetched value from the API.
  }
}

export class EmailNotificationListener implements Observer {
  public updateCount = 0;

  public update(eventType: string, value: any): void {
    this.updateCount++;
    // Send Email Notification of the eventType and Value
  }
}

export class PushNotificationListener implements Observer {
  public updateCount = 0;

  public update(eventType: string, value: any): void {
    this.updateCount++;
    // Send Push Notification of the eventType and Value
  }
}
