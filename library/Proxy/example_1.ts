export interface IWebPageDownloader {
  downloadsCounter: number;
  download(url: string): string;
}

export class WebPageDownloader implements IWebPageDownloader {
  public downloadsCounter = 0;

  public download(url: string): string {
    // Downloading web page logic
    this.downloadsCounter++;
    return `Web Page: ${url}`;
  }
}

export class CachedDownloaderProxy implements IWebPageDownloader {
  private _downloader: IWebPageDownloader;
  private _cache: Map<string, string>;

  public constructor(downloader: IWebPageDownloader) {
    this._downloader = downloader;
    this._cache = new Map<string, string>();
  }

  public download(url: string): string {
    const cached = this._cache.get(url);
    if (cached === undefined) {
      const downloaded = this._downloader.download(url);
      this._cache.set(url, downloaded);
      return downloaded;
    }

    return cached;
  }

  public get downloadsCounter(): number {
    return this._downloader.downloadsCounter;
  }
}
