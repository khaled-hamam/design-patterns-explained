import { Button, Panel, TextBox, InputForm, Window } from "./example_1";

describe("Composite Pattern", () => {
  describe("Example 1 Tests", () => {
    const button = new Button();
    const button2 = new Button();
    const button3 = new Button();
    const textBox = new TextBox();

    const buttonsPanel = new Panel();
    buttonsPanel.addElement(button);
    buttonsPanel.addElement(button2);
    buttonsPanel.addElement(button3);
    buttonsPanel.addElement(textBox);

    const bigPanel = new Panel();
    const inputForm = new InputForm();
    const textBox2 = new TextBox();
    bigPanel.addElement(textBox2);
    bigPanel.addElement(inputForm);
    bigPanel.addElement(buttonsPanel);

    const window = new Window();
    const textBox3 = new TextBox();
    window.addElement(textBox3);
    window.addElement(bigPanel);

    it("should render the correct tree", () => {
      const expectedTree =
        "Window(TextBox, Panel(TextBox, InputForm, Panel(Button, Button, Button, TextBox)))";

      expect(window.draw()).toBe(expectedTree);
    });

    it("should remove item correclty", () => {
      window.removeElement(bigPanel);
      const expectedTree = "Window(TextBox)";

      expect(window.draw()).toBe(expectedTree);
      window.addElement(bigPanel);
    });

    it("should add item correclty", () => {
      window.addElement(new InputForm());
      window.removeElement(bigPanel);
      const expectedTree = "Window(TextBox, InputForm)";

      expect(window.draw()).toBe(expectedTree);
    });
  });
});
