import { ParticleFactory, ParticleContext, Particle } from './example_1';

describe('Flyweight Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should create one particle only', () => {
      const particles: ParticleContext[] = [];
      const factory = new ParticleFactory();
      const texture = 'TEXTURE 1';
      const color = 'RED';

      for (let i = 0; i < 20; ++i) {
        const particle = factory.getParticle(texture, color);
        particles.push(new ParticleContext(Math.random() * 100, Math.random() * 100, particle));
      }

      expect(Particle.objectCount).toBe(1);
    });
  });
});
