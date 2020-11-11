# Interface Segregation Principle

![Interface Segregation Principle](https://user-images.githubusercontent.com/24835522/98735552-3c6c2700-23ac-11eb-90ae-dd2eb0b5376b.png)

**Definition:**
Clients should not be forced to depend on methods they do not use.

- Prefer Small cohesive interfaces to fat interfaces.
- If there’s a class that implements a part of the interface, then the interface should be split into smaller interfaces that can be used separately.

## Example

![Example UML](https://user-images.githubusercontent.com/24835522/98861849-9fbe8d80-246e-11eb-9013-d99b3bfec330.png)

```typescript
interface ICRUDService<T> {
  create(model: T): void;
  find(id: number): T;
  update(model: T): void;
  delete(model: T): void;
}

class EmployeeService implements ICRUDService<Employee> {
  public find(id: number) {
    // finding logic
  }

  public create(model: T) {
    throw new Error('Not Implemented');
  }

  public update(model: T) {
    throw new Error('Not Implemented');
  }

  public delete(model: T) {
    throw new Error('Not Implemented');
  }
}
```

Now let's see the problems introduced in this example:

- The EmployeeService is a Read-Only Service which obviously doesn't need to implement the bloated ICRUDService interface.
- The EmployeeService now violates LSP as there are methods that aren't implemented.

## Solution

![Solution UML](https://user-images.githubusercontent.com/24835522/98861892-af3dd680-246e-11eb-8cf9-758b0b1e40c6.png)

```typescript
interface IReadService<T> {
  find(id: number): T;
}

interface IWriteService<T> {
  create(model: T): void;
  update(model: T): void;
  delete(model: T): void;
}

class EmployeeService implements IReadService<Employee> {
  public find(id: number) {
    // finding logic
  }
}
```

Now we separated the Read Interface from the Write Interface so service can be a Read-Only, a Write-Only, or even a Read/Write Service.
