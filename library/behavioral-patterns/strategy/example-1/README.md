# Example 1

The example is a Notifier Class that sends a notification to a certain platform once and error count threshold is reached.

## Mapping The Example to Structure

- ErrorNotifier **::** Context
- SlackNotifier **::** Concrete Strategy
- NotificationStrategy **::** Abstract Strategy

## UML

<p align="center">
  <img alt="Example 1 UML Diagram" src="../figures/example-1.drawio.svg">
</p>

## Files

- [Source Code](index.ts)
- [Tests](index.test.ts)
