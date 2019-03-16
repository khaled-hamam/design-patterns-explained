export class GameMap {
  public constructor(
    public difficultyLevel: number,
    public area: number,
    public isDestroyed: boolean,
    public hero: Hero,
    public enemies: Enemy[],
    public buildings: Building[]
  ) {}
}

class Hero {
  public constructor(public name: string) {}
}

class Enemy {
  public constructor(private name: string, private damage: number) {}
}

interface Building {
  xPosition: number;
  yPosition: number;
  collapese(): string;
}

class NormalBuilding implements Building {
  public constructor(private _xPosition: number, private _yPosition: number) {}

  get xPosition() {
    return this._xPosition;
  }

  get yPosition() {
    return this._yPosition;
  }

  public collapese() {
    return 'The Building is now Destroyed!';
  }
}

class CollapsedBuilding implements Building {
  public constructor(private _xPosition: number, private _yPosition: number) {}

  get xPosition() {
    return this._xPosition;
  }

  get yPosition() {
    return this._yPosition;
  }

  public collapese() {
    return 'The Building is already Destroyed!';
  }
}

export interface GameMapBuilder {
  setOptions(area: number, difficultyLevel: number): void;
  buildHero(): void;
  buildEnemies(): void;
  buildBuildings(): void;
  getGameMap(): GameMap;
}

export class NormalGameMapBuilder implements GameMapBuilder {
  private _gameMap!: GameMap;

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this._gameMap = new GameMap(0, 0, false, new Hero(''), [], []);
  }

  public getGameMap(): GameMap {
    return this._gameMap;
  }

  setOptions(area: number, difficultyLevel: number): void {
    this._gameMap.area = area;
    this._gameMap.difficultyLevel = difficultyLevel;
    this._gameMap.isDestroyed = false;
  }

  buildHero(): void {
    this._gameMap.hero = new Hero('My Hero');
  }

  buildEnemies(): void {
    this._gameMap.enemies = [
      new Enemy('Enemy 1', 10),
      new Enemy('Enemy 2', 20),
      new Enemy('Enemy 3', 30)
    ];
  }

  buildBuildings(): void {
    this._gameMap.buildings = [
      new NormalBuilding(0, 0),
      new NormalBuilding(0, 0),
      new NormalBuilding(0, 0),
      new NormalBuilding(0, 0)
    ];
  }
}

export class CollapsedGameMapBuilder implements GameMapBuilder {
  private _gameMap!: GameMap;

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this._gameMap = new GameMap(0, 0, true, new Hero(''), [], []);
  }

  public getGameMap(): GameMap {
    return this._gameMap;
  }

  setOptions(area: number, difficultyLevel: number): void {
    this._gameMap.area = area;
    this._gameMap.difficultyLevel = difficultyLevel;
    this._gameMap.isDestroyed = true;
  }

  buildHero(): void {
    this._gameMap.hero = new Hero('My Hero');
  }

  buildEnemies(): void {
    this._gameMap.enemies = [
      new Enemy('Enemy 1', 10),
      new Enemy('Enemy 2', 20),
      new Enemy('Enemy 3', 30)
    ];
  }

  buildBuildings(): void {
    this._gameMap.buildings = [
      new CollapsedBuilding(0, 0),
      new CollapsedBuilding(0, 0),
      new CollapsedBuilding(0, 0),
      new CollapsedBuilding(0, 0)
    ];
  }
}

export class GameMapDirector {
  private _builder: GameMapBuilder;

  public constructor(builder: GameMapBuilder) {
    this._builder = builder;
  }

  public changeBuilder(builder: GameMapBuilder) {
    this._builder = builder;
  }

  public constructGameMap(area: number, difficulty: number, hasEnemies: boolean): GameMap {
    this._builder.setOptions(area, difficulty);
    this._builder.buildHero();
    if (hasEnemies) {
      this._builder.buildEnemies();
    }

    this._builder.buildBuildings();

    return this._builder.getGameMap();
  }
}
