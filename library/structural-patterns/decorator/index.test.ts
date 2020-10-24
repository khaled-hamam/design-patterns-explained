import { Button, Border, Shadow } from './example_1';
import { Vanilla, Espresso, Coffee, Chocolate, AmericanCoffee } from './example_2';

describe('Decorator Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should add a border and a shadow', () => {
      let borderShadowBtn = new Button();
      borderShadowBtn = new Border(borderShadowBtn);
      borderShadowBtn = new Shadow(borderShadowBtn);

      expect(borderShadowBtn.draw()).toBe('Button, Border, Shadow');
    });

    it('should add double border', () => {
      let doubleBorderBtn = new Button();
      doubleBorderBtn = new Border(doubleBorderBtn);
      doubleBorderBtn = new Border(doubleBorderBtn);

      expect(doubleBorderBtn.draw()).toBe('Button, Border, Border');
    });
  });

  describe('Example 2 Tests', () => {
    it('should make a vanilla espresso', () => {
      const vanillaEspresso: Coffee = new Vanilla(new Espresso());

      expect(vanillaEspresso.price).toBe(35);
    });

    it('should make a chocolate american coffee', () => {
      const chocolateAmerican: Coffee = new Chocolate(new AmericanCoffee());

      expect(chocolateAmerican.price).toBe(50);
    });

    it('should make a double vanilla american coffee', () => {
      const doubleVanilla: Coffee = new Vanilla(new Vanilla(new AmericanCoffee()));

      expect(doubleVanilla.price).toBe(50);
    });
  });
});
