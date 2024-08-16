import replaceAllCustom from "./index";

describe("replaceAllCustom", () => {
  test("replaces all occurrences", () => {
    const originalText = "Hello, world! Hello, everyone!";
    const replacements = {
      from: "Hello",
      to: "Bye",
    };

    const newText = replaceAllCustom(originalText, replacements);

    expect(newText).toBe("Bye, world! Bye, everyone!");
  });
});
