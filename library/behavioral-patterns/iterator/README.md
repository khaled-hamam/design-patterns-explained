# Prototype Pattern

## Intent

Provide a way to access the elements of a collection without exposing the underlying representation.

## When to use

1. When your collection has a complex data structure under the hood, but you want to hide its complexity from clients (either for convenience or security reasons).
2. To support multiple traversal techniques for a collection.
3. You want to provide a uniform interface for traversing different types of collections (Polymorphic Iteration).
4. To reduce duplication of the traversal code across your app.

## Structure

<p align="center">
  <img src="figures/figure_1.png">
</p>

- Iterator: defines an interface for accessing and traversing elements.
- ConcreteIterator: implements the iterator interface for a certain collection.
- IterableCollection: defines an interface for creating an iterator object.
- ConcreteCollection: keeps track of the current object (data structure).

## Notes

Most of the programming languages provide their own ways of implementing iterators. TypeScript (and JS of course) provide an interface for the Iterators, and a Symbol in the class to create the iterators so the Collection will be able to participate in for..of loops (check example 2 and 3). Also generator functions return iterators so they can be used as iterators (Check example 3).

## Examples

|        Source Code        |  UML   |
| :-----------------------: | :----: |
| [Example 1](example_1.ts) | // TODO |
| [Example 2](example_2.ts) | // TODO |
| [Example 3](example_3.ts) | // TODO |

You can find the tests [here](index.test.ts).
