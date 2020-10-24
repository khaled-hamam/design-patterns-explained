export interface IShape {
  display(x1: number, y1: number, x2: number, y2: number): string;
}

export class LegacyRectangle {
  public display(x: number, y: number, width: number, height: number): string {
    return `Rectangle Origin Point: (${x}, ${y}), Width: ${width}, and Height: ${height}`;
  }
}

export class Rectangle implements IShape {
  display(x1: number, y1: number, x2: number, y2: number): string {
    const legacyRect: LegacyRectangle = new LegacyRectangle();
    const width = x2 - x1;
    const height = y2 - y1;

    return legacyRect.display(x1 + width / 2, y1 + height / 2, width, height);
  }
}
