# Decorator Pattern

### Intent

Attach additional responsibilities to an object dynamically. Also provides a flexible alternative to subclassing for extending functionality.

### When to use

1. Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.
2. If you want responsibilities to be withdrawn dynamically.
3. When extending by subclassing is impractical, as sometimes large number of extensions would produce and explosion of subclasses to support every combination.
4. When it is not possible to extend by subclassing, as some classes are final classes, and maybe comming from an external library where it is not possible to modify.

### Structure

![](../../.gitbook/assets/figure_1%20%2817%29.png)

* Component: defines the interface for objects that can have responsibilities added to them dynamically.
* ConcreteComponent: defines an object to which the additional responsibilities can be attached.
* Decorator: maintains a reference to a Component object and defines an interface that conforms to Component's interface.
* ConcreteDecorator: adds responsibilities to the component.

### Note

Decotator can be implemented either as an interface or an abstract class, GoF recommend imitting the abstract class as there's no need to define a class when you only need to add one responsibility, and directly merge it by forwarding requests to the component in the ConcreteDecotrators.

## Examples

| Source Code | UML |
| :---: | :---: |
| [Example 1](https://github.com/khaled-hamam/ts-design-patterns/tree/9a9bacf47635b736d3fdc4ffdb6fc5abb1e729f8/library/Structural%20Patterns/Decorator/example_1.ts) | _TODO_ |
| [Example 2](https://github.com/khaled-hamam/ts-design-patterns/tree/9a9bacf47635b736d3fdc4ffdb6fc5abb1e729f8/library/Structural%20Patterns/Decorator/example_2.ts) | _TODO_ |

You can find the tests [here](https://github.com/khaled-hamam/ts-design-patterns/tree/9a9bacf47635b736d3fdc4ffdb6fc5abb1e729f8/library/Structural%20Patterns/Decorator/index.test.ts).

