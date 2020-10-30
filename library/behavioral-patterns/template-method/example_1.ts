export abstract class SocialNetwork {
  protected _username!: string;
  protected _password!: string;

  public get username() {
    return this._username;
  }

  public get password() {
    return this._password;
  }

  public post(message: string): boolean {
    // Authentication step
    if (this.logIn()) {
      // Login Hook
      this.onLogIn();

      // Sending message step
      const result: boolean = this.sendData(message);

      this.logOut();
      // Logout Hook
      this.onLogOut();

      return result;
    }

    return false;
  }

  protected abstract logIn(): boolean;
  protected abstract sendData(message: string): boolean;
  protected abstract logOut(): void;

  // Hooks
  protected onLogOut() {}
  protected onLogIn() {}
}

export class Facebook extends SocialNetwork {
  public constructor(username: string, password: string) {
    super();
    this._username = username;
    this._password = password;
  }

  protected logIn(): boolean {
    // authenticating the user
    if (this._username === "Khaled" && this._password === "123") {
      return true;
    } else {
      return false;
    }
  }

  protected sendData(message: string): boolean {
    // Sending the data
    return true;
  }

  protected logOut(): void {
    // logging the user out
  }

  protected onLogIn() {
    // We'll make this hook an impure function
    // It's a bad practice but just for testing.
    this._username = "Logged In Facebook";
  }

  protected onLogOut() {
    // We'll make this hook an impure function
    // It's a bad practice but just for testing.
    this._password = "Logged Out Facebook";
  }
}

export class Twitter extends SocialNetwork {
  public constructor(username: string, password: string) {
    super();
    this._username = username;
    this._password = password;
  }

  protected logIn(): boolean {
    // authenticating the user
    if (this._username === "Twitter" && this._password === "1234") {
      return true;
    } else {
      return false;
    }
  }

  protected sendData(message: string): boolean {
    // Sending the data
    return true;
  }

  protected logOut(): void {
    // logging the user out
  }
}
