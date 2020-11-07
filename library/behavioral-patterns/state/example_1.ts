export class MediaPlayer {
  private _mediaFile: string;
  private _state: IMediaPlayerState;
  public timestamp: number;

  public constructor(mediaFile: string) {
    this._mediaFile = mediaFile;
    this.timestamp = 0;
    this._state = new PausedState(this);
  }

  public get isPlaying() {
    return this._state instanceof PlayingState;
  }

  public changeState(state: IMediaPlayerState) {
    this._state = state;
  }

  public play() {
    this._state.play();
  }

  public next() {
    this._state.next();
  }

  public previous() {
    this._state.previous();
  }

  public startPlayback() {
    // some logic to play
  }

  public pausePlayback() {
    // some logic to pause
  }

  public fastforward(seconds: number) {
    // some logic to fastforward
    this.timestamp += seconds;
  }

  public rewind(seconds: number) {
    // some logic to fastforward
    this.timestamp -= seconds;
  }

  public nextFile() {
    // some logic to get next file
    this.timestamp = 0;
  }

  public previousFile() {
    // some logic to get previous file
    this.timestamp = 0;
  }
}

interface IMediaPlayerState {
  play(): void;
  next(): void;
  previous(): void;
}

class PausedState implements IMediaPlayerState {
  public constructor(private player: MediaPlayer) {}

  public play(): void {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }

  public next(): void {
    this.player.nextFile();
  }

  public previous(): void {
    this.player.previousFile();
  }
}

class PlayingState implements IMediaPlayerState {
  public constructor(private player: MediaPlayer) {}

  public play(): void {
    this.player.pausePlayback();
    this.player.changeState(new PausedState(this.player));
  }

  public next(): void {
    this.player.fastforward(5);
  }

  public previous(): void {
    this.player.rewind(5);
  }
}
