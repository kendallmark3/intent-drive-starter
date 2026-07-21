/**
 * Greeting Service
 *
 * Implementation derived from: intents/example.intent.md
 *
 * Intent: greet a user by name, defaulting to "World" when no name is given.
 *
 * @param {string} [name] - The name of the user to greet.
 * @returns {string} A greeting string.
 */
function greet(name) {
  const target = (typeof name === "string" && name.trim().length > 0)
    ? name.trim()
    : "World";
  return `Hello, ${target}!`;
}

module.exports = { greet };
