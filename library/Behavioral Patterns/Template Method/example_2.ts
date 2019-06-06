export class MyClass {
  constructor(public a: number, public b: number, public c: number) {}
}

export abstract class SortService {
  public sort(array: MyClass[]): MyClass[] {
    const arrayCopy: MyClass[] = [];
    array.forEach(entry => arrayCopy.push(entry));

    for (let i = 0; i < arrayCopy.length; ++i) {
      for (let j = 1; j < arrayCopy.length; ++j) {
        if (this.shouldSwap(arrayCopy[j], arrayCopy[j - 1])) {
          const tmp = arrayCopy[j];
          arrayCopy[j] = arrayCopy[j - 1];
          arrayCopy[j - 1] = tmp;
        }
      }
    }

    return arrayCopy;
  }

  protected abstract shouldSwap(a: MyClass, b: MyClass): boolean;
}

export class SortOnAService extends SortService {
  protected shouldSwap(a: MyClass, b: MyClass): boolean {
    return a.a < b.a;
  }
}

export class SortOnBService extends SortService {
  protected shouldSwap(a: MyClass, b: MyClass): boolean {
    return a.b < b.b;
  }
}

export class SortOnCService extends SortService {
  protected shouldSwap(a: MyClass, b: MyClass): boolean {
    return a.c < b.c;
  }
}
