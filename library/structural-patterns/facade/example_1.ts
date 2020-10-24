class User {
  public constructor(public email: string, public password: string) {}
}

class UserRepository {
  private static _instance: UserRepository;
  public static get instance() {
    if (this._instance === undefined) {
      this._instance = new UserRepository();
    }
    return this._instance;
  }

  private _users: User[] = [];

  private constructor() {}

  public find(user: User) {
    return this._users.find(dbUser => dbUser.email === user.email);
  }

  public create(user: User) {
    // some db logic to create the user
    this._users.push(user);
    return user;
  }
}

class NotificationService {
  public notifyUser(user: User) {
    // sending notification to the user email
  }
}

class UserValidator {
  public isValid(user: User) {
    return UserRepository.instance.find(user) === undefined;
  }
}

class PasswordEncryptor {
  public encrypt(password: string) {
    return 'ENCRYPTED' + password;
  }
}

export class UserServiceFacade {
  public createUser(email: string, password: string) {
    let user = new User(email, password);
    const validator = new UserValidator();

    if (!validator.isValid(user)) {
      throw new Error('Invalid User');
    }

    const encryptor = new PasswordEncryptor();
    user.password = encryptor.encrypt(user.password);

    user = UserRepository.instance.create(user);

    const notificationService = new NotificationService();
    notificationService.notifyUser(user);

    return user;
  }
}
