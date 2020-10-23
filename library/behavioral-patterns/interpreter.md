# Interpreter Pattern

Sometimes a particular problem occurs many time that it might be worthy to express this problems in a special kind of language or grammar. Interpreting this language with to know what it's supposed to mean or to do is what the Interpreter pattern does.

## Intent

Given a language, define a representation \(classes\) for its grammar, then use the representation to interpret the sentences in of this language.

## When to use

1. When the grammar of the language is simple, as for complex grammar the codebase will become very large \(as each keyword will have its own class\).

## Structure

![](../../.gitbook/assets/figure_1%20%282%29.png)

* **AbstractExpression:** delcares an abstract interpret operation that is common to all nodes in the **Abstract Syntax Tree \(AST\)**
* **TerminalExpression:** implements the interpret operation associated with the terminal symbols in the grammar of the language.
* **NonTerminalExpression:** acts as the composite expression in the pattern, the interpret method typically calls the interpret of its children.
* **Context:** the class that hold the info that should be known while interpretting the grammar.

## Note

The Interpreter Pattern is often used with Compilers, actually it can be the second part of the solution to make a language, it is not concerned with how you generate the [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) \(AST\), so if you want to write normal strings and interpret them, you need to parse them first to generate the AST from the set of classes you made to express the language grammar.

As the AST is a tree, the **Composite Pattern** is nearly always used in the **Interpreter Pattern**, in fact **Composite Pattern** is always an **Interpreter Pattern** but we can't call a Composite as Interpreter until it's used to interpret a certain kind of grammar.

**Interpreter Pattern** maybe used to interpret or as we can say translate or change from one form to another, as it can change a normal mathematical equation to a postfix form for example, or even change from roman numerals to normal digits, and this kind of usage to the pattern doesn't always need to build an AST, of course it still needs a tree but it will be one layer deep, so no composite pattern is introduced \(as numerals for example doesn't carry children, it consists of one layer only or as we say **TerminalExpression**s only\).

## Examples

As the examples for the interpreter pattern are often complex I'll put some links from other resources that did a great job in giving examples for the pattern.

| Example |
| :---: |
| [Roman Numerals to Decimal Interpreter](https://www.dofactory.com/net/interpreter-design-pattern) |
| [Calculator Interpreter](http://www.java2s.com/Code/Java/Design-Pattern/InterpreterPatternCalculator.htm) |
| [SQL Syntax Interpreter](https://www.baeldung.com/java-interpreter-pattern) |

