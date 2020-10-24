interface User {
  email: string;
  password: string;
}

type HandlerMethod = (params: any[], next: Function) => any;

export class Handler {
  private _callback: HandlerMethod;
  private _next: Handler;

  public constructor(callback: HandlerMethod) {
    this._callback = callback;
    this.handle = this.handle.bind(this);
  }

  public attach(handler: Handler): Handler {
    this._next = handler;
    return handler;
  }

  public handle(params: any[]) {
    return this._callback(params, this._next ? this._next.handle : undefined);
  }
}

export class Server {
  private _users: User[];
  private _handlers: Map<string, Handler>;

  public constructor() {
    this._users = [];
    this._handlers = new Map<string, Handler>();
  }

  public registerUser(email: string, password: string) {
    this._users.push({ email, password });
  }

  public getUser(email: string) {
    return this._users.find(user => user.email === email);
  }

  public attach(chainName: string, handler: Handler) {
    this._handlers.set(chainName, handler);
  }

  public handle(chainName: string, ...params: any[]) {
    return this._handlers.get(chainName).handle(params);
  }
}
