import { UserServiceFacade } from "./example_1";

describe("Facade Pattern", () => {
  describe("Example 1 Tests", () => {
    it("should create the user and hash password", () => {
      const facade = new UserServiceFacade();
      const user = facade.createUser("khaled@gmail.com", "123456");

      expect(user.password).toBe("ENCRYPTED123456");
    });
  });
});
