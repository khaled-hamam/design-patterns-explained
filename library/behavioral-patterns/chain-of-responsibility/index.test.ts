import { Server, Handler } from './example_1';

describe('Chain of Responsibility Pattern', () => {
  describe('Example 1 Tests', () => {
    let server: Server;

    beforeAll(() => {
      server = new Server();

      const checkUserNotExistsMiddleWare = new Handler(
        (params: any[], next: Function) => {
          const [email, password] = params;
          if (server.getUser(email) === undefined) {
            return next(params);
          }
          return 'EMAIL ALREADY EXISTS';
        }
      );

      const registerHandler = new Handler((params: any[], next: Function) => {
        const [email, password] = params;
        server.registerUser(email, 'ENCRYPTED' + password);
        return 'REGISTERED';
      });

      const checkUserExistsMiddleWare = new Handler(
        (params: any[], next: Function) => {
          const [email, password] = params;
          if (server.getUser(email)) {
            return next(params);
          }
          return 'INVALID EMAIL';
        }
      );

      const checkUserPassword = new Handler((params: any[], next: Function) => {
        const [email, password] = params;
        if (server.getUser(email).password === 'ENCRYPTED' + password) {
          return next(params);
        }
        return 'INVALID PASSWORD';
      });

      const loginHandler = new Handler((params: any[], next: Function) => {
        return 'LOGGED IN';
      });

      const loginChain = checkUserExistsMiddleWare;
      loginChain.attach(checkUserPassword).attach(loginHandler);

      const registerChain = checkUserNotExistsMiddleWare;
      registerChain.attach(registerHandler);

      server.attach('login', loginChain);
      server.attach('register', registerChain);
    });

    it('should register successfully', () => {
      const email = 'khaled@gmail.com';
      const password = '123456';

      server.handle('register', email, password);

      const user = server.getUser(email);
      expect(user).toEqual({ email, password: 'ENCRYPTED' + password });
    });

    it('should login successfully', () => {
      const email = 'khaled@gmail.com';
      const password = '123456';

      server.handle('register', email, password);

      const reply = server.handle('login', email, password);
      expect(reply).toBe('LOGGED IN');
    });
  });
});
