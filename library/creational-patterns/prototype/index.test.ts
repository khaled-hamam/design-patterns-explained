import { Button, ButtonRegistry } from "./example_1";
import { WebPage } from "./example_2";

describe("Prototype Pattern", () => {
  describe("Example 1 Tests", () => {
    it("should return 2 different clones of the same prototype", () => {
      const button1: Button | undefined = ButtonRegistry.getButton("Red Round");
      const button2: Button | undefined = ButtonRegistry.getButton("Red Round");

      expect(button1 === button2).toBe(false);
    });

    it("should register a new button in runtime", () => {
      const myCustomButton = new Button("Black", 35, true);
      ButtonRegistry.registerButton("Custom Button", myCustomButton);
      const customButtonClone = ButtonRegistry.getButton("Custom Button");

      if (customButtonClone === undefined) {
        throw "Button failed to register";
      }

      expect(myCustomButton === customButtonClone).toBe(false);
      expect(myCustomButton.color === customButtonClone.color).toBe(true);
      expect(myCustomButton.size === customButtonClone.size).toBe(true);
      expect(myCustomButton.isRounded === customButtonClone.isRounded).toBe(
        true
      );
    });

    it("should clone in runtime without registry", () => {
      const myCustomButton = new Button("Black", 35, true);
      const customButtonClone = myCustomButton.clone();

      expect(myCustomButton === customButtonClone).toBe(false);
      expect(myCustomButton.color === customButtonClone.color).toBe(true);
      expect(myCustomButton.size === customButtonClone.size).toBe(true);
      expect(myCustomButton.isRounded === customButtonClone.isRounded).toBe(
        true
      );
    });
  });

  describe("Example 2 Tests", () => {
    it("should clone the WebPage successfully", () => {
      const newPage: WebPage = new WebPage();
      const clonedPage: WebPage = newPage.clone();

      expect(clonedPage.content).toBe(newPage.content);
    });

    it("should return a different instance", () => {
      const newPage: WebPage = new WebPage();
      const clonedPage: WebPage = newPage.clone();

      expect(clonedPage === newPage).toBe(false);
    });
  });
});
