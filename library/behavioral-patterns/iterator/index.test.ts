import { List, MyIterator } from './example_1';
import { List as List2 } from './example_2';
import { List as ListGenerator } from './example_3';

describe('Iterator Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should iterate successfuly with elements', () => {
      const list: List<number> = new List<number>(1, 2, 3);
      const iterator: MyIterator = list.createIterator();
      const output: number[] = [];

      while (iterator.hasNext()) {
        output.push(iterator.next() as number);
      }

      expect(output).toEqual([1, 2, 3]);
    });

    it('should iterate successfuly without elements', () => {
      const list: List<number> = new List<number>();
      const iterator: MyIterator = list.createIterator();
      const output: number[] = [];

      while (iterator.hasNext()) {
        output.push(iterator.next() as number);
      }

      expect(output).toEqual([]);
    });
  });

  describe('Example 2 Tests', () => {
    it('should iterate successfuly with for of loop', () => {
      const list: List2<number> = new List2<number>(1, 2, 3);
      const output: number[] = [];

      for (const item of list) {
        output.push(item);
      }

      expect(output).toEqual([1, 2, 3]);
    });

    it('should iterate successfuly with iterator', () => {
      const list: List2<number> = new List2<number>(1, 2, 3);
      const iterator = list[Symbol.iterator]();
      const output: number[] = [];

      do {
        const next = iterator.next();
        if (next.done) {
          break;
        } else {
          output.push(next.value as number);
        }
      } while (true);

      expect(output).toEqual([1, 2, 3]);
    });
  });

  describe('Example 3 Tests', () => {
    it('should iterate successfuly with for of loop', () => {
      const list: ListGenerator<number> = new ListGenerator<number>(1, 2, 3);
      const output: number[] = [];

      for (const item of list) {
        output.push(item);
      }

      expect(output).toEqual([1, 2, 3]);
    });

    it('should iterate successfuly with iterator', () => {
      const list: ListGenerator<number> = new ListGenerator<number>(1, 2, 3);
      const iterator = list[Symbol.iterator]();
      const output: number[] = [];

      do {
        const next = iterator.next();
        if (next.done) {
          break;
        } else {
          output.push(next.value as number);
        }
      } while (true);

      expect(output).toEqual([1, 2, 3]);
    });
  });
});
