import { GameCharacter, GameCharacterStore } from './example_1';
import { WebPage } from './example_2';

describe('Prototype Pattern', () => {
  describe('Example 1 Tests', () => {
    beforeAll(() => {
      GameCharacterStore.loadCharacters();
    });

    it('should return hero character', () => {
      const hero: GameCharacter | undefined = GameCharacterStore.getPrototype('Hero');

      if (hero === undefined) {
        throw 'Hero is undefined';
      }

      expect(hero.name).toBe('Hero');
    });

    it('should return villain character', () => {
      const villain: GameCharacter | undefined = GameCharacterStore.getPrototype('Villain');

      if (villain === undefined) {
        throw 'Villain is undefined';
      }

      expect(villain.name).toBe('Villain');
    });
  });

  describe('Example 2 Tests', () => {
    it('should clone the WebPage successfully', () => {
      const newPage: WebPage = new WebPage();
      const clonedPage: WebPage = newPage.clone();

      expect(clonedPage.content).toBe(newPage.content);
    });

    it('should return a different instance', () => {
      const newPage: WebPage = new WebPage();
      const clonedPage: WebPage = newPage.clone();

      expect(clonedPage === newPage).toBe(false);
    });
  });
});
