import { WindowsGUIFactory, GUIFactory, MacGUIFactory } from './example_1';

describe('Abstract Factory Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should create Windows GUI Elements', () => {
      const factory: GUIFactory = new WindowsGUIFactory();
      const button = factory.createButton();
      const alert = factory.createAlert();

      expect(button.click()).toBe('Windows Button');
      expect(alert.alert()).toBe('Windows Alert');
    });

    it('should create Mac GUI Elements', () => {
      const factory: GUIFactory = new MacGUIFactory();
      const button = factory.createButton();
      const alert = factory.createAlert();

      expect(button.click()).toBe('Mac Button');
      expect(alert.alert()).toBe('Mac Alert');
    });
  });
});
