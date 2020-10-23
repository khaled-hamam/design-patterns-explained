# Memento Pattern

Sometimes it's necessary to record the internal state of an object when implementing checkpoints or undo mechanisms, when the state is complex many violations to the object encapsulation may occur as exposing the private members to be able to copy them, or copying unwanted members to the state.

## Intent

Withot violating encapsulation, capture and externalize the object's internal state so that it can be restored later.

## When to use

1. When a snapshot \(backup\) of an object's state must be saved so it can be restored later.
2. When a direct interface to obtain the state would expose implementation and break the object's encapsulation.

## Structure

![](../../.gitbook/assets/figure_1%20%284%29.png)

* **Memento:** a class that stores the internal state of the Originator object. It should protect against access by objects other than the originator, and may introduce some metadata about the snapshot \(date or name\).
* **Originator:** the actual object that needs to store its state, it should be able to create a snapshot \(Memento\) and restore its internal state from a snapshot.
* **Caretaker:** is responsible for the memento's safekeeping. It never operate on or examines the contents of memento.

## Note

Memento's implementation is highly reliable on the languages that allow **internal classes or friend classes**, to hide any details of the state from the Caretaker, and expose everything to the Originator. That's why its structure may vary to achieve true encapsulation, or you can use a few of the language tricks to achieve it if you're using a language that doesn't support internal/friend classes.

**Memento pattern** is often used with the **Command Pattern**, the Memento handles the undo and backup operations, while the Command handles the operations that cause the change to the Originator, while one class acts as the Invoker and Caretaker.

## Examples

I'll be using the same example from the **Command Pattern** \(while adding the Memento Pattern\) to show the usage of Command with Memento.

| Source Code | UML |
| :---: | :---: |
| [Example 1](https://github.com/khaled-hamam/ts-design-patterns/tree/9a9bacf47635b736d3fdc4ffdb6fc5abb1e729f8/library/Behavioral%20Patterns/Memento/example_1.ts) | _TODO_ |

You can find the tests [here](https://github.com/khaled-hamam/ts-design-patterns/tree/9a9bacf47635b736d3fdc4ffdb6fc5abb1e729f8/library/Behavioral%20Patterns/Memento/index.test.ts).

