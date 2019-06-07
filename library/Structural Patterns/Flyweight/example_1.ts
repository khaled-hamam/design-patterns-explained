interface IParticle {
  draw(x: number, y: number): string;
}

export class Particle implements IParticle {
  private texture: string;
  private color: string;
  public static objectCount = 0;

  public constructor(texture: string, color: string) {
    this.texture = texture;
    this.color = color;
    Particle.objectCount++;
  }

  public draw(x: number, y: number) {
    return `X: ${x}, Y: ${y}, TEXTURE: ${this.texture}, COLOR: ${this.color}`;
  }
}

export class ParticleContext {
  public x: number;
  public y: number;
  private _particle: IParticle;

  public constructor(x: number, y: number, particle: IParticle) {
    this.x = x;
    this.y = y;
    this._particle = particle;
  }

  public draw() {
    this._particle.draw(this.x, this.y);
  }
}

export class ParticleFactory {
  private _chache: Map<string, IParticle> = new Map<string, IParticle>();

  public getParticle(texture: string, color: string) {
    const key = texture + color;
    if (!this._chache.has(key)) {
      this._chache.set(key, new Particle(texture, color));
    }

    return this._chache.get(key);
  }
}
