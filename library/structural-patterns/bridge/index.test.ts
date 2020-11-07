import { Circle, OpenGL, Rectangle, DirectX } from './example_1';

describe('Bridge Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should draw a circle using OpenGL', () => {
      const circle = new Circle(0, 0, new OpenGL());
      expect(circle.draw()).toBe('Drawing a Circle, on (0, 0) using OpenGL');
    });

    it('should draw a rectangle using OpenGL', () => {
      const rectangle = new Rectangle(5, 5, new OpenGL());
      expect(rectangle.draw()).toBe(
        'Drawing a Rectangle, on (5, 5) using OpenGL'
      );
    });

    it('should draw a circle using DirectX', () => {
      const circle = new Circle(1, 1, new DirectX());
      expect(circle.draw()).toBe('Drawing a Circle, on (1, 1) using DirectX');
    });

    it('should draw a rectangle using DirectX', () => {
      const rectangle = new Rectangle(6, 5, new DirectX());
      expect(rectangle.draw()).toBe(
        'Drawing a Rectangle, on (6, 5) using DirectX'
      );
    });
  });
});
