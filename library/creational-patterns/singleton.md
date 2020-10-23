# Singleton Pattern

### Intent

Ensures the class has only one instance, and providing a global point of access to it.

### When to use

1. When we need only one or a certain ammount of instances of the class.
2. When lazy Initialization is needed.
   * If the class needs to be initialized in a certain point of time.
   * If the class needs to be initialized only when needed to save memory.
3. When the class should be extensible by or modified subclasses \(for polymorphism and overriding functions\).
   * As C++, C\# and other languages doesn't provide the ability to override static functions \(this is valid in TypeScript\).
   * An instance is required to achieve polymorphism in run-time.
4. When we want to avoid clutter in the global namespace.

### Structure

![](../../.gitbook/assets/figure_1%20%2812%29.png)

* Singleton: defines a static instance of the class, and a static method to lazy initialize and return this instance.

### Singleton VS Static Methods

Singleton Pattern is often misused, as an easy pattern to implement it is often used to replace global or static classes.

Singleton is used over static classes if most of the reasons to use Singleton is applied:

1. If lazy initialization is needed, as we cannot lazy initialize static classes nor control when it is initialized \(especially if initialization must be after a certain point of time\), and of course to save memory if not needed.
2. If polymorphism is going to be used, as we cannot inject static classes as services. Static methods cannot be called from a class instance. Also in a few languages we cannot override static functions in child classes.

If neither reasons applies to our problem, then rethink using the Singleton pattern.

## Examples

| Source Code | UML |
| :---: | :---: |
| [Example 1](https://github.com/khaled-hamam/ts-design-patterns/tree/9a9bacf47635b736d3fdc4ffdb6fc5abb1e729f8/library/Creational%20Patterns/Singleton/example_1.ts) | _TODO_ |

You can find the tests [here](https://github.com/khaled-hamam/ts-design-patterns/tree/9a9bacf47635b736d3fdc4ffdb6fc5abb1e729f8/library/Creational%20Patterns/Singleton/index.test.ts).

