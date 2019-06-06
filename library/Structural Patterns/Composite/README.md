# Composite Pattern

Compose objects into tree structures, and lets the clients treat individual objects and compositions of objects uniformly.

### When to use

1. You have to implement a tree-like object structure.
2. The client code wants to treat both simple and complex elements uniformly.

### Structure

- Component: declares the common interface between simple and complex objects of the tree.
- Leaf: the basic element of the tree that doesn't have sub-elements.
- Composite: the complex element of the tree, it shouldn't know the concrete classes of its elements, works with its sub-elements only through the Component interface, upon recieving a request it delegates the work to its sub-elements and then returns the final result to the client.

### GoF Design VS Modern Designs

In the GoF book, it changes the Component interface to put as much common interface between both simple and complex as possible (mostly adding the full complex object interface). Of course this violates the Interface Segragation Principle and Liskov's Substituion Principle, as the interface has functionality that the leaf objects won't use and will have to implement them in an incorrect behavior to skip the interface requirements.

In modern designs of the patterns this is ommitted, but the GoF justifies this as to minimize the difference between leaf and composite elements, so the user wouldn't know or feel the difference between both and treats them as normal objects. Also it's justified that sometimes there're some creative solutions for this problem, as for the method that returns the children, an empty list can be returned by the leaf (as leaf objects can't have any children).
