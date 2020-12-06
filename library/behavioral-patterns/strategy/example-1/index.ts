interface NotificationStrategy {
  notify(message: string): void;
}

export class ErrorNotifier {
  private errorCount: number;
  private threshold: number;
  private label: string;
  private notificationStrategy: NotificationStrategy;

  constructor(threshold: number, label: string, notificationStrategy: NotificationStrategy) {
    this.errorCount = 0;
    this.threshold = threshold;
    this.label = label;
    this.notificationStrategy = notificationStrategy;
  }

  public registerError() {
    this.errorCount += 1;

    if (this.errorCount === this.threshold) {
      this.errorCount = 0;
      this.notificationStrategy.notify(`You exceeded your error threshold in ${this.label}`);
    }
  }
}

export class SlackNotifier implements NotificationStrategy {
  public constructor(private readonly apiKey: string) {}

  public notify(message: string) {
    // Slack api call
  }
}

export class EmailNotifier implements NotificationStrategy {
  public constructor(private readonly email: string) {}

  public notify(message: string) {
    // Send email with the message
  }
}
