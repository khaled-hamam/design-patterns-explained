export interface Asteroid {
  name: string;
  hit(): string;
}

export interface AsteroidFactory {
  createAsteroid(): Asteroid;
}

class BigAsteroid implements Asteroid {
  public name: string = "Big Asteroid";

  public hit(): string {
    return `You got killed from ${this.name}`;
  }
}

class SmallAsteroid implements Asteroid {
  public name: string = "Small Asteroid";

  public hit(): string {
    return `You got killed from ${this.name}`;
  }
}

export class SequentialAsteroidFactory implements AsteroidFactory {
  private _turn: boolean = false;

  createAsteroid(): Asteroid {
    let asteroid: Asteroid;

    if (!this._turn) {
      asteroid = new BigAsteroid();
    } else {
      asteroid = new SmallAsteroid();
    }

    this._turn = !this._turn;
    return asteroid;
  }
}

export class BigAsteroidFactory implements AsteroidFactory {
  createAsteroid(): Asteroid {
    const asteroid: Asteroid = new BigAsteroid();
    // Maybe do some logic here (example: randomizing Asteroid Position)

    return asteroid;
  }
}

export class SmallAsteroidFactory implements AsteroidFactory {
  createAsteroid(): Asteroid {
    const asteroid: Asteroid = new SmallAsteroid();
    // Maybe do some logic here

    return asteroid;
  }
}
