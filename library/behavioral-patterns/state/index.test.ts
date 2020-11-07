import { MediaPlayer } from './example_1';

describe('State Pattern', () => {
  describe('Example 1 Tests', () => {
    let player: MediaPlayer;

    beforeEach(() => {
      player = new MediaPlayer('movie.mp4');
    });

    it('should play and pause correctly', () => {
      player.play();
      expect(player.isPlaying).toBe(true);

      player.play();
      expect(player.isPlaying).toBe(false);
    });

    it('should skip a song', () => {
      player.next();
      expect(player.timestamp).toBe(0);
    });

    it('should fastforward 10 seconds', () => {
      player.play();

      player.next();
      player.next();
      player.previous();
      player.next();

      expect(player.timestamp).toBe(10);
    });
  });
});
