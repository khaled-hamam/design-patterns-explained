![Design Patterns Explained.](https://user-images.githubusercontent.com/24835522/96385851-d61e2b00-1196-11eb-8c7f-b608bf1ff05b.png)

***

This is intended to be a collection of most of the well-known design patterns, with explanation, examples, illustrations, and everything you need to learn and understand design patterns.

## Introduction

Design patterns are gaining more popularity each day, but the problem is that they are often misused, either by putting them outside of their intended context, or by putting them in the right position, with the correct usage, but before the problem is frequent or big enough to deserve implementing a known design pattern which will often end by you over-engineering the code base abd increasing its complexity.

One of the causes that will result in misusing the patterns is that most of the examples found online to learn patterns are often very simple and trivial, that you won't be able to understand when to use the pattern or why it existed in the first place.

In this collection of patterns I'll try as possible to stay away of any ducks and pizzas examples, and writing a real cases, while explaining when to use the pattern, and what problems implementing the pattern will introduce.

## Consuming the Content

There's no correct way to consume this content, you can go through the patterns with any order, and if a pattern uses a concept from another pattern, or the example make use of another pattern, I'll make sure to mention it.

I can recommend to read and understand the **[SOLID Principles](./library/solid-principles/README.md)** before moving to any of the patterns.

You can choose any of the patterns from the **[patterns catalogue](./library/README.md)**.

## Keep in Mind

* Design patterns can be easily **misused**, so make sure to fully understand the pattern, its use cases, and what is the problem it is trying to solve.
* Design patterns **don't have one way for implementation**, you can change the implementation, the components, and even mix between the patterns as you wish.
* Design patterns aren't the ultimate solution to a problem, they may even introduce a few problems of their own due to their limitations, so implement only what you need, and feel free to extend them with what you see fits your context.
* I'll try as possible to avoid trivial examples, but I may not be able to make real-life examples for all the patterns, so feel free to contribute with a better example, or try searching one of the [learning sources](#learning-sources) for better examples.

## How to Use the Tests

You'll need this only if you want to play with the code and try new things, or if you want to contribute to the project.

```bash
# Installing the needed dependencies
$ npm install

# OPTIONAL: Run Compilation for Error Checking
$ npm run build

# OPTIONAL: Run Compilation on Watch Mode
$ npm run build:watch

# Running the tests
$ npm test

# Running the tests in watch mode
$ npm run test:watch

# Running tests for a certain pattern
$ npm run test <pattern-folder-name>
```

## Learning Sources

1. [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8)
2. [Design Patterns Library | Pluralsight](https://app.pluralsight.com/library/courses/patterns-library)
3. [Refactoring.guru](https://refactoring.guru)
4. [SourceMaking.com](https://sourcemaking.com/design_patterns)
5. [Wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern)
