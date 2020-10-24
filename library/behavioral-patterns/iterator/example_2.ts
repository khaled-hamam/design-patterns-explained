class ListIterator<T> implements Iterator<T | null> {
  private _currentIndex = 0;
  private _list: T[];

  constructor(list: List<T>) {
    this._list = list.getList();
  }

  next(value?: any): IteratorResult<T | null> {
    return {
      done: this._currentIndex >= this._list.length,
      value: this._currentIndex >= this._list.length ? null : this._list[this._currentIndex++]
    };
  }
}

export class List<T> implements Iterable<T | null> {
  private _list: T[];

  public constructor(...list: T[]) {
    this._list = list || [];
  }

  public append(value: T) {
    this._list.push(value);
  }

  public getList() {
    return this._list;
  }

  [Symbol.iterator](): Iterator<T | null> {
    return new ListIterator<T>(this);
  }
}
