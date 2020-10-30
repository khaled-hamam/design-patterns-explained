import {
  GameMapDirector,
  CollapsedGameMapBuilder,
  NormalGameMapBuilder,
} from "./example_1";

describe("Builder Pattern", () => {
  it("should create a collapsed map", () => {
    const collapsedBuilder = new CollapsedGameMapBuilder();
    const gameMapDirector = new GameMapDirector(collapsedBuilder);

    const gameMap = gameMapDirector.constructGameMap(200, 1, true);

    expect(gameMap.isDestroyed).toBe(true);
  });

  it("should create a normal map", () => {
    const normalBuilder = new NormalGameMapBuilder();
    const gameMapDirector = new GameMapDirector(normalBuilder);

    const gameMap = gameMapDirector.constructGameMap(200, 1, true);

    expect(gameMap.isDestroyed).toBe(false);
  });

  it("should skip the enemy creation process", () => {
    const collapsedBuilder = new CollapsedGameMapBuilder();
    const gameMapDirector = new GameMapDirector(collapsedBuilder);

    const gameMap = gameMapDirector.constructGameMap(200, 1, false);

    expect(gameMap.enemies.length).toBe(0);
  });
});
