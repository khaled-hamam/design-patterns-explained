export interface IClonable {
  clone(): object;
}

export class WebPage implements IClonable {
  public content: string;

  public constructor() {
    // Time Consuming Logic
    this.content = "Page Loaded";
  }

  clone(): WebPage {
    const cloned: WebPage = Object.create(WebPage.prototype || null);
    cloned.content = this.content;

    return cloned;
  }
}
