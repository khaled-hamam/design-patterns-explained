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

  public *[Symbol.iterator](): Iterator<T | null> {
    for (const i of this._list) {
      yield i;
    }
  }
}
