export class PubSub {
  private subscriptions: Map<string, Array<Function>>;

  constructor() {
    this.subscriptions = new Map<string, Array<Function>>();
  }

  public subscribe(event: string, callback: Function) {
    const subscribers = this.subscriptions.get(event);

    if (subscribers) {
      subscribers.push(callback);
    } else {
      this.subscriptions.set(event, [callback]);
    }
  }

  public publish(event: string, ...args: unknown[]) {
    for (const callback of this.subscriptions.get(event)) {
      callback(...args);
    }
  }
}

export class UsersService {
  public constructor(private readonly emitter: PubSub) {}

  public createUser(email: string, password: string) {
    // some user creation logic
    this.emitter.publish('NEW_USER_EVENT', email);
  }
}

export class UsersMetricsService {
  public constructor(private readonly emitter: PubSub) {
    this.emitter.subscribe('NEW_USER_EVENT', this.onNewUser);
  }

  public onNewUser(email: string) {
    // some metrics logic
  }
}

export class NotificationService {
  public constructor(private readonly emitter: PubSub) {
    this.emitter.subscribe('NEW_USER_EVENT', this.onNewUser);
  }

  public onNewUser(email: string) {
    // some email notification logic
  }
}
