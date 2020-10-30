import { SocialNetwork, Facebook } from "./example_1";
import {
  MyClass,
  SortOnAService,
  SortOnBService,
  SortOnCService,
} from "./example_2";

describe("Template Method Pattern", () => {
  describe("Example 1 Tests", () => {
    it("should not login", () => {
      const network: SocialNetwork = new Facebook("Wrong", "123");

      expect(network.post("Will not post")).toBe(false);
    });

    it("should not login and activate the hooks", () => {
      const network: SocialNetwork = new Facebook("Khaled", "123");

      expect(network.post("Will Post")).toBe(true);
      expect(network.username).toBe("Logged In Facebook");
      expect(network.password).toBe("Logged Out Facebook");
    });
  });

  describe("Example 2 Tests", () => {
    const a = new MyClass(1, 2, 3);
    const b = new MyClass(2, 3, 1);
    const c = new MyClass(3, 1, 2);

    it("should sort based on member a", () => {
      const sortService = new SortOnAService();
      expect(sortService.sort([a, b, c])).toEqual([a, b, c]);
    });

    it("should sort based on member b", () => {
      const sortService = new SortOnBService();
      expect(sortService.sort([a, b, c])).toEqual([c, a, b]);
    });

    it("should sort based on member c", () => {
      const sortService = new SortOnCService();
      expect(sortService.sort([a, b, c])).toEqual([b, c, a]);
    });
  });
});
