export interface Shape {
  draw(): string;
}

export interface IShapeFactory {
  createShape(type: string): Shape;
}

class Rectangle implements Shape {
  public draw(): string {
    return 'Rectangle';
  }
}

class Square implements Shape {
  public draw(): string {
    return 'Square';
  }
}

export class ShapeFactory implements IShapeFactory {
  createShape(type: string): Shape {
    let shape: Shape;

    switch (type) {
      case 'Rectangle':
        shape = new Rectangle();
        break;
      case 'Square':
        shape = new Square();
        break;
      default:
        throw 'Not allowed type';
    }

    return shape;
  }
}
