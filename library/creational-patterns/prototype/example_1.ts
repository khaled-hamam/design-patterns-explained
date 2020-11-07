interface IClonable {
  clone(): object;
}

export class Button implements IClonable {
  public color: string;
  public size: number;
  public isRounded: boolean;

  public constructor(color: string, size: number, isRounded: boolean) {
    this.color = color;
    this.size = size;
    this.isRounded = isRounded;
  }

  public clone(): Button {
    const cloned = Object.create(Button.prototype || null);
    Object.keys(this).map((key: string) => {
      cloned[key] = (this as any)[key];
    });

    return cloned;
  }
}

export class ButtonRegistry {
  private static _registry: Map<string, Button>;
  private static _isLoaded: boolean;

  public static registerButton(id: string, button: Button): void {
    if (!this._isLoaded) {
      this.loadRegistry();
    }

    this._registry.set(id, button);
  }

  public static getButton(id: string): Button | undefined {
    if (!this._isLoaded) {
      this.loadRegistry();
    }

    const button = this._registry.get(id);

    if (button === undefined) {
      return undefined;
    }

    return button.clone();
  }

  private static loadRegistry(): void {
    const redRound = new Button('Red', 40, true);
    const blueSharp = new Button('Blue', 40, false);
    const greenSmall = new Button('Green', 20, true);
    this._registry = new Map<string, Button>([
      ['Red Round', redRound],
      ['Blue Sharp', blueSharp],
      ['Green Small', greenSmall],
    ]);

    this._isLoaded = true;
  }
}
