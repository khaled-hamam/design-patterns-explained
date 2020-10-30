export interface MyIterator {
  next(): Object;
  hasNext(): boolean;
}

interface IterableStructure {
  createIterator(): MyIterator;
}

class ListIterator<T> implements MyIterator {
  private _currentIndex = 0;
  private _list: T[];

  constructor(list: List<T>) {
    this._list = list.getList();
  }

  next(): T {
    if (this._currentIndex < this._list.length) {
      return this._list[this._currentIndex++];
    } else {
      throw "Has no next!";
    }
  }

  hasNext(): boolean {
    return this._currentIndex < this._list.length;
  }
}

export class List<T> implements IterableStructure {
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

  createIterator(): MyIterator {
    return new ListIterator<T>(this);
  }
}
