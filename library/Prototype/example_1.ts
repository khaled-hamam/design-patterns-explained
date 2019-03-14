export interface GameCharacter {
  name: string;
  clone(): GameCharacter;
}

export class Hero implements GameCharacter {
  public name: string = 'Hero';

  clone(): Hero {
    const cloned = Object.create(Hero.prototype || null);
    cloned.name = this.name;

    return cloned;
  }
}

export class Villain implements GameCharacter {
  public name: string = 'Villain';

  clone(): Hero {
    const cloned = Object.create(Villain.prototype || null);
    Object.keys(this).map((key: string) => {
      cloned[key] = (this as any)[key];
    });

    return cloned;
  }
}

export class GameCharacterStore {
  private static characterMap: Map<string, GameCharacter>;

  public static loadCharacters(): void {
    this.characterMap = new Map<string, GameCharacter>();
    this.characterMap.set('Hero', new Hero());
    this.characterMap.set('Villain', new Villain());
  }

  public static getPrototype(type: string): GameCharacter | undefined {
    let character: GameCharacter | undefined = this.characterMap.get(type);
    return character;
  }
}
