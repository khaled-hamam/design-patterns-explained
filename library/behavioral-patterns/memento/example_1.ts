class EditorSnapshot {
  public constructor(private _state: object) {}

  public get state() {
    return { ...this._state };
  }
}

export class Editor {
  public text: string;
  private _clipboard: string;

  public constructor() {
    this.text = '';
    this._clipboard = '';
  }

  public createSnapshot(): EditorSnapshot {
    return new EditorSnapshot({ text: this.text });
  }

  public restore(snapshot: EditorSnapshot) {
    const { text } = snapshot.state as any;
    this.text = text;
  }

  public copy(text: string) {
    this._clipboard = text;
  }

  public paste() {
    return this._clipboard;
  }
}

interface IClonable {
  clone(): object;
}

abstract class EditorCommand implements IClonable {
  protected _editor: Editor;
  private _backup: EditorSnapshot;

  public constructor(editor: Editor) {
    this._editor = editor;
  }

  protected backup() {
    this._backup = this._editor.createSnapshot();
  }

  public undo() {
    this._editor.restore(this._backup);
  }

  public clone(): EditorCommand {
    const newCommand = Object.create(this) as EditorCommand;
    newCommand._backup = this._backup;

    return newCommand;
  }

  public abstract execute(): boolean;
}

export class CommandInvoker {
  private _history: EditorCommand[];

  public constructor() {
    this._history = [];
  }

  public execute(command: EditorCommand) {
    if (command.execute()) {
      this._history.push(command.clone());
    }
  }

  public undo() {
    this._history.pop().undo();
  }
}

export class CopyCommand extends EditorCommand {
  private _text: string;

  public constructor(editor: Editor, text: string) {
    super(editor);
    this._text = text;
  }

  public execute(): boolean {
    this._editor.copy(this._text);
    return false;
  }
}

export class PasteCommand extends EditorCommand {
  public execute(): boolean {
    this.backup();
    this._editor.text += this._editor.paste();
    return true;
  }
}
