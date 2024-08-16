/**
 * Replaces all occurrences of a specified string within a text with a new string.
 *
 * @param {string} text - The original text to be modified.
 * @param {{ from: string; to: string; }} replacements - An object specifying the replacement details:
 *   * `from`: The string to be searched for and replaced.
 *   * `to`: The string to be used as a replacement.
 * @returns {string} A new string with all occurrences of the `from` string replaced by the `to` string.
 */
function replaceAllCustom(
  text: string,
  replacements: { from: string; to: string }
): string {
  const { from, to } = replacements;
  const regex = new RegExp(from, "g"); // 'g' flag for global replacement
  return text.replace(regex, to);
}

export default replaceAllCustom;

// For CommonJS default export support
module.exports = replaceAllCustom;
module.exports.default = replaceAllCustom;
module.exports.__esModule = true;
