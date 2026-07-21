/**
 * Tests for the Greeting Service.
 *
 * Each test maps directly to an intent statement in intents/example.intent.md.
 */

const assert = require("assert");
const { greet } = require("../src/example");

// Intent 1: greeting includes "Hello" and the user's name
assert.strictEqual(greet("Alice"), "Hello, Alice!", "Should greet Alice");
assert.strictEqual(greet("Bob"), "Hello, Bob!", "Should greet Bob");

// Intent 2: no name → default to "World"
assert.strictEqual(greet(""), "Hello, World!", "Empty string → World");
assert.strictEqual(greet(), "Hello, World!", "Undefined → World");
assert.strictEqual(greet("  "), "Hello, World!", "Whitespace-only → World");

// Intent 3: pure function — calling twice with the same input yields the same output
assert.strictEqual(greet("Carol"), greet("Carol"), "Pure function — deterministic");

// Intent 4: return type is string
assert.strictEqual(typeof greet("Dave"), "string", "Return type is string");

console.log("All intent tests passed ✓");
