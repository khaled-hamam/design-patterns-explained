export interface GUIElement {
  draw(): string;
}

export class Button implements GUIElement {
  draw(): string {
    return 'Button';
  }
}

export abstract class Decorator implements GUIElement {
  private _component: GUIElement;

  constructor(component: GUIElement) {
    this._component = component;
  }

  draw(): string {
    return this._component.draw();
  }
}

export class Border extends Decorator {
  constructor(component: GUIElement) {
    super(component);
  }

  draw(): string {
    return super.draw() + ', Border';
  }
}

export class Shadow extends Decorator {
  constructor(component: GUIElement) {
    super(component);
  }

  draw(): string {
    return super.draw() + ', Shadow';
  }
}
