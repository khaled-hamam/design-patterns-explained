import { Editor, CommandInvoker, PasteCommand, CopyCommand } from "./example_1";

describe("Memento Pattern", () => {
  describe("Example 1 Tests", () => {
    let editor: Editor;
    let invoker: CommandInvoker;
    let pasteCommand: PasteCommand;

    beforeEach(() => {
      editor = new Editor();
      invoker = new CommandInvoker();
      pasteCommand = new PasteCommand(editor);
    });

    it("should undo correctly", () => {
      const copiedOne = "Copied Text One";
      const copiedTwo = "Copied Text Two";

      let copyCommand = new CopyCommand(editor, copiedOne);
      invoker.execute(copyCommand);
      invoker.execute(pasteCommand);

      copyCommand = new CopyCommand(editor, copiedTwo);
      invoker.execute(copyCommand);
      invoker.execute(pasteCommand);

      invoker.undo();
      expect(editor.text).toBe(copiedOne);

      invoker.undo();
      expect(editor.text).toBe("");
    });
  });
});
