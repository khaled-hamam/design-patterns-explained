import { Shape, IShapeFactory, ShapeFactory } from './example_2';
import {
  Asteroid,
  AsteroidFactory,
  SequentialAsteroidFactory,
  BigAsteroidFactory,
  SmallAsteroidFactory
} from './example_1';

describe('Factory Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should return big asteroid from SequentialFactory', () => {
      const factory: AsteroidFactory = new SequentialAsteroidFactory();
      const asteroid: Asteroid = factory.createAsteroid();

      expect(asteroid.name).toBe('Big Asteroid');
    });

    it('should return small asteroid from SequentialFactory', () => {
      const factory: AsteroidFactory = new SequentialAsteroidFactory();
      const bigAsteroid: Asteroid = factory.createAsteroid();
      const smallAsteroid: Asteroid = factory.createAsteroid();

      expect(smallAsteroid.name).toBe('Small Asteroid');
    });

    it('should use polymorphims to create Asteroids correctly', () => {
      let factory: AsteroidFactory = new BigAsteroidFactory();
      const bigAsteroid = factory.createAsteroid();

      factory = new SmallAsteroidFactory();
      const smallAsteroid = factory.createAsteroid();

      expect(smallAsteroid.name).toBe('Small Asteroid');
      expect(bigAsteroid.name).toBe('Big Asteroid');
    });
  });

  describe('Example 2 Tests', () => {
    it('should return square', () => {
      const factory: IShapeFactory = new ShapeFactory();
      const shape: Shape = factory.createShape('Square');

      expect(shape.draw()).toBe('Square');
    });

    it('should return rectangle', () => {
      const factory: IShapeFactory = new ShapeFactory();
      const shape: Shape = factory.createShape('Rectangle');

      expect(shape.draw()).toBe('Rectangle');
    });
  });
});
