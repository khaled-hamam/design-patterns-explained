import { CachedDownloaderProxy, WebPageDownloader } from './example_1';
import { ProxyImage } from './example_2';

describe('Proxy Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should download page only once', () => {
      const downloader = new CachedDownloaderProxy(new WebPageDownloader());
      downloader.download('Google.com');
      downloader.download('Google.com');

      expect(downloader.downloadsCounter).toBe(1);
    });
  });

  describe('Example 2 Tests', () => {
    it('should lazy load the image', () => {
      const image: ProxyImage = new ProxyImage('myImage.png');
      expect(image.image).toBe(undefined);
      image.draw();
      expect(image.image).not.toBe(undefined);
    });
  });
});
