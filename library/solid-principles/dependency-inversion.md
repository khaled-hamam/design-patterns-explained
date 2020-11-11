# Dependency Inversion Principle

![Dependency Inversion Principle](https://user-images.githubusercontent.com/24835522/98735658-69b8d500-23ac-11eb-9295-11d67b4c77c1.png)

**Definition:**
High-level modules should not depend on Low-level Modules, but both should depend on abstractions.

**The normal flow of module dependencies:** High-level Modules -> Medium Level Modules -> Low-level Modules.

![Normal Flow of Dependencies](https://user-images.githubusercontent.com/24835522/98863177-a8b05e80-2470-11eb-8c2a-36b59b52ca24.png)

**What we want to achieve:** High-level Modules -> Medium Level Abstractions <- Medium Level Modules -> Low-level Abstractions <- Low-level Modules.

![Dependency Inversion Flow](https://user-images.githubusercontent.com/24835522/98863236-c1207900-2470-11eb-978f-214c0ba93ffc.png)

- DI Principle helps in achieving a very decoupled code that helps in extension and testing.
- To achieve true dependency inversion, every dependency should be explicit (no new keywords inside the module).
- To achieve explicit dependencies we can use dependency injection either in **Constructors**, **Method Parameters**, **property injection**, or even using **IoC Containers** (Inversion of Control).

## Refactoring to apply DIP

1. Extract Dependencies into interfaces
2. Inject Implementations of interfaces
3. Apply SRP

## Example

![Example UML](https://user-images.githubusercontent.com/24835522/98863276-ced5fe80-2470-11eb-87f1-dc2d0a4fcb9e.png)

```typescript
class UserService {
  public registerUser(user: User) {
    // registration logic

    const notificationService = new NotificationService();
    notificationService.notifyUser(user, 'Welcome');
  }
}

class NotificationService {
  public notifyUser(user: User, message: string) {
    // notification logic
  }
}
```

The problem here is actually obvious, the UserService is coupled with this exact NotificationService, testing the UserService alone is impossible, and of course, it became much harder to run tests as NotificationService may rely on things not available in the current time (a special mail server or something).

One solution is to make the NotificationService an explicit dependency, but don't forget that **polymorphism** will not work, as NotificationService is a concrete class not an abstraction.

## Solution

![Solution UML](https://user-images.githubusercontent.com/24835522/98863317-db5a5700-2470-11eb-8f2a-8c40a0356a20.png)

```typescript
class UserService {
  private _notificationService;

  public constructor(notificationService: INotificationService) {
    this._notificationService = notificationService;
  }

  public registerUser(user: User) {
    // registration logic

    this._notificationService.notifyUser(user, 'Welcome');
  }
}

interface INotificationService {
  notifyUser(user: User, message: string): void;
}

class NotificationService implements INotificationService {
  public notifyUser(user: User, message: string) {
    // notification logic
  }
}
```

Now as the dependency with the NotificationService is decoupled and relies on an abstraction, the NotificationService implementation can be swapped in runtime with other concrete classes that implement the same abstraction.

Also now writing Unit tests for UserService doesn't rely on the NotificationService anymore as a mock can be written to replace the real NotificationService during the tests.
