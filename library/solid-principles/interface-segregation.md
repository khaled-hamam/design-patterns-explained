# Interface Segregation Principle

**Definition:**
Clients should not be forced to depend on methods they do not use.

- Prefer Small cohesive interfaces than fat interfaces.
- If there’s a class that implements a part of the interface, then the interface should be split into smaller interfaces that can be used separately.

## Example

![Figure 5](figures/figure_5.png)

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

- The EmployeeService is a Read-Only Service which obviously doesn't need to implemented the bloated ICRUDService interface.
- The EmployeeService now violates LSP as there are methods which aren't implemented.

## Solution

![Figure 6](figures/figure_6.png)

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

Now we separated the Read Interface from the Write Interface so a service can be a Read-Only, a Write-Only, or even a Read/Write Service.
