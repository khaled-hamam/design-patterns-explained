export interface Button {
  click(): string;
}

export interface Alert {
  alert(): string;
}

export interface GUIFactory {
  createButton(): Button;
  createAlert(): Alert;
}

class MacButton implements Button {
  public click() {
    return 'Mac Button';
  }
}

class WindowsButton implements Button {
  public click() {
    return 'Windows Button';
  }
}

class MacAlert implements Alert {
  public alert() {
    return 'Mac Alert';
  }
}

class WindowsAlert implements Alert {
  public alert() {
    return 'Windows Alert';
  }
}

export class MacGUIFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createAlert(): Alert {
    return new MacAlert();
  }
}

export class WindowsGUIFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createAlert(): Alert {
    return new WindowsAlert();
  }
}
