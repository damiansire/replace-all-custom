# replace-all-custom

A simple and customizable solution for replacing all occurrences of a string within a text.

## Installation

```bash
npm install replace-all-custom
```

## Usage

```javascript
import replaceAllCustom from "replace-all-custom";

const originalText = "Hello, world! Hello, everyone!";
const replacements = {
  from: "Hello",
  to: "Bye",
};

const newText = replaceAllCustom(originalText, replacements);

console.log(newText); // Output: "Bye, world! Bye, everyone!"
```

## API

### `replaceAllCustom(text, replacements)`

- `text` (string): The original text in which the replacements will be made.
- `replacements` (object): An object with the following properties:
  - `from` (string): The string to be searched for and replaced.
  - `to` (string): The string to be used as a replacement.

**Returns:** A new string with all occurrences of `from` replaced by `to`.

## Features

- **Simple and straightforward:** The `replaceAllCustom` function offers a clear and easy-to-use interface for performing text replacements.
- **Customizable:** You can specify exactly which string you want to replace and with what value, giving you full control over the replacement process.
- **Performant:** The function is designed to be efficient, even when handling large amounts of text.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

1. [https://github.com/damiansire/replace-all-custom](https://github.com/damiansire/replace-all-custom)

## License

MIT License

**Enjoy simple and effective text replacement with replace-all-custom!**
