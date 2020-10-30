export interface GUIElement {
  draw(): string;
}

abstract class CompositeGUIElement implements GUIElement {
  private _children: GUIElement[];

  public constructor() {
    this._children = [];
  }

  addElement(element: GUIElement): void {
    this._children.push(element);
  }

  removeElement(element: GUIElement): void {
    this._children = this._children.filter((e) => e !== element);
  }

  getChild(index: number): GUIElement {
    return this._children[index];
  }

  draw(): string {
    let children = this._children.map((child) => child.draw());

    return children.join(", ");
  }
}

export class Window extends CompositeGUIElement {
  draw(): string {
    return "Window(" + super.draw() + ")";
  }
}

export class Panel extends CompositeGUIElement {
  draw(): string {
    return "Panel(" + super.draw() + ")";
  }
}

export class Button implements GUIElement {
  draw(): string {
    return "Button";
  }
}

export class TextBox implements GUIElement {
  draw(): string {
    return "TextBox";
  }
}

export class InputForm implements GUIElement {
  draw(): string {
    return "InputForm";
  }
}
