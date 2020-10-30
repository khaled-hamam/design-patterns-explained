export interface GraphicsAPI {
  draw(type: string, xPosition: number, yPosition: number): string;
}

export abstract class Shape {
  protected _xPosition: number;
  protected _yPosition: number;
  protected _graphicsAPI: GraphicsAPI;

  protected constructor(
    xPosition: number,
    yPosition: number,
    graphicsAPI: GraphicsAPI
  ) {
    this._xPosition = xPosition;
    this._yPosition = yPosition;
    this._graphicsAPI = graphicsAPI;
  }

  public abstract draw(): string;
}

export class Circle extends Shape {
  public constructor(
    xPosition: number,
    yPosition: number,
    graphicsAPI: GraphicsAPI
  ) {
    super(xPosition, yPosition, graphicsAPI);
  }

  public draw(): string {
    return this._graphicsAPI.draw('Circle', this._xPosition, this._yPosition);
  }
}

export class Rectangle extends Shape {
  public constructor(
    xPosition: number,
    yPosition: number,
    graphicsAPI: GraphicsAPI
  ) {
    super(xPosition, yPosition, graphicsAPI);
  }

  public draw(): string {
    return this._graphicsAPI.draw(
      'Rectangle',
      this._xPosition,
      this._yPosition
    );
  }
}

export class OpenGL implements GraphicsAPI {
  draw(type: string, xPosition: number, yPosition: number): string {
    return `Drawing a ${type}, on (${xPosition}, ${yPosition}) using OpenGL`;
  }
}

export class DirectX implements GraphicsAPI {
  draw(type: string, xPosition: number, yPosition: number): string {
    return `Drawing a ${type}, on (${xPosition}, ${yPosition}) using DirectX`;
  }
}
