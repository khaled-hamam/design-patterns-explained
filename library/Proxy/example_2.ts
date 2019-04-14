export interface IGraphic {
  draw(): string;
  load(fileName: string): void;
}

export class Image implements IGraphic {
  public constructor(fileName: string) {
    this.load(fileName);
  }

  public draw(): string {
    return 'Drawing Image...';
  }

  public load(fileName: string) {
    // loading image (time consuming operation)
  }
}

export class ProxyImage implements IGraphic {
  private _image: Image;
  private _fileName: string;

  public constructor(fileName: string) {
    this._fileName = fileName;
    this._image = undefined;
  }

  public draw(): string {
    if (this._image === undefined) {
      this.load(this._fileName);
    }

    return this._image.draw();
  }

  public load(fileName: string) {
    this._image = new Image(fileName);
  }

  public get image(): Image {
    return this._image;
  }
}
